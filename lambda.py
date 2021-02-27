import base64
import boto3
import os
from contextlib import closing


def lambda_handler(event, context):
    # init polly
    polly = boto3.client("polly")

    # get submitted text string and selected voice
    text = event["text"]
    voice = event.get("voice", "Salli")

    # strip out slashes if submitted with text string
    if "/" in text:
        text = text.replace("/", "")

    # generate phoneme tag for polly to read
    phoneme = f"<phoneme alphabet='ipa' ph='{text}'></phoneme>"

    # send to polly, requesting mp3 back
    response = polly.synthesize_speech(
        OutputFormat="mp3",
        TextType="ssml",
        Text=phoneme,
        VoiceId=voice
    )

    # encode polly's returned audio stream as base64 and return
    if "AudioStream" in response:
        with closing(response["AudioStream"]) as stream:
            audio = base64.encodebytes(stream.read())

        return audio.decode("ascii")
