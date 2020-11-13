import React, { Component } from 'react';
import classnames from 'classnames';
import merge from 'deepmerge'

import glyphs, { Glyph } from './glyphs';
import charsets, { CharsetType } from './charsets';

interface IpaInputProps {
    language: CharsetType | "",
    showName: boolean,
    showNumber: boolean,
    value: string,
    onChange?: (newValue: string) => void
    onSubmit?: (value: string) => void
}

interface IpaInputState {
    touch: boolean,
    value: string,
    suggestions: Glyph[],
    selectedSuggestion: number,
    mouseOverList: boolean
}


class IpaInput extends Component<IpaInputProps, IpaInputState> {
    private input: React.RefObject<HTMLInputElement>;


    static defaultProps = {
        language: '',
        showName: true,
        showNumber: true,
        value: ''
    }

    constructor(props: IpaInputProps) {
        super(props);

        this.state = {
            touch: false,
            value: '',
            suggestions: [],
            selectedSuggestion: -1,
            mouseOverList: false
        };

        this.input = React.createRef();
    }

    onKeyDown(event: React.KeyboardEvent) {
        /**
         * Handle suggestions list navigation and selection
         */
        const keyCode = event.keyCode;

        if (this.state.suggestions.length > 0) {
            switch (keyCode) {
                case 37: // left arrow
                    this.selectSuggestion(this.state.selectedSuggestion - 1);
                    event.preventDefault();
                    break;

                case 39: // right arrow
                    this.selectSuggestion(this.state.selectedSuggestion + 1);
                    event.preventDefault();
                    break;

                case 13: // enter
                    this.insertSuggestion(this.state.selectedSuggestion);
                    event.preventDefault();
                    break;
            }

            // number keys 1-9
            if (keyCode >= 49 && keyCode <= 57) {
                const index = keyCode - 49;
                if (index <= this.state.suggestions.length) {
                    this.insertSuggestion(index);
                    event.preventDefault();
                }
            }

            // numpad keys
            if (keyCode >= 97 && keyCode <= 105) {
                const index = keyCode - 97;
                if (index <= this.state.suggestions.length) {
                    this.insertSuggestion(index);
                    event.preventDefault();
                }
            }
        }

        if (this.props.onSubmit && this.state.suggestions.length <= 0) {
            switch (keyCode) {
                case 13:
                    this.props.onSubmit(this.state.value)
            }
        }

        // ctrl + a-z quick insertion
        // if(event.ctrlKey && keyCode >= 65 && keyCode <= 90) {
        //     event.preventDefault();
        //     console.log('ctrl', keyCode);

        //     const chr = String.fromCharCode(keyCode + 32);
        //     if(this.state.lastQuery === chr) {
        //         this.selectSuggestion(this.state.selectedSuggestion + 1, true);
        //     } else {
        //         const suggestions = this.getSuggestions(chr);
        //         console.log('input', chr, suggestions);
        //         this.setState({
        //             suggestions: suggestions,
        //         }, () => {
        //             if(suggestions.length) {
        //                 this.selectSuggestion(0);
        //             }
        //         });
        //     }
        // }
    }

    onTouchStart(event: React.TouchEvent) {
        /**
         * Activate mobile-friendly 'touch' mode when tapped
         */
        this.setState({
            touch: true
        });
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        /**
         * Update suggestions list
         */
        let suggestions: Glyph[] = [];
        if (event.target.selectionStart &&
            event.target.value.length > 0 && event.target.selectionStart > 0) {
            const inputChar = event.target.value[event.target.selectionStart - 1].toLowerCase();
            suggestions = this.getSuggestions(inputChar);
        }

        this.setState({
            suggestions: suggestions,
            selectedSuggestion: 0,
            value: event.target.value
        });

        this.props.onChange?.(event.target.value)
    }

    onFocus(event: React.FocusEvent) { }

    onBlur(event: React.FocusEvent) {
        if (!this.state.mouseOverList) {
            this.setState({
                suggestions: []
            });
        }
    }

    onListMouseOver(event: React.MouseEvent) {
        this.setState({
            mouseOverList: true
        });
    }

    onListMouseOut(event: React.MouseEvent) {
        this.setState({
            mouseOverList: false
        });
    }

    getSuggestions(query: string) {
        const suggestions = [];
        for (let glyph of glyphs) {
            if (glyph.resembles.indexOf(query) !== -1) {
                if (!this.props.language ||
                    (charsets[this.props.language].indexOf(glyph.glyph) !== -1) ||
                    (glyph.diacritic)) {
                    suggestions.push(glyph);
                }
            }
        }

        return suggestions;
    }

    selectSuggestion(index: number) {
        let newIndex = Math.max(0, Math.min(this.state.suggestions.length - 1, index));

        // if (loop && index < 0) {
        //     newIndex = this.state.suggestions.length - 1;
        // } else if (loop && index > this.state.suggestions.length - 1) {
        //     newIndex = 0;
        // }

        const oldValue = this.state.value;
        const caretPos = this.input.current?.selectionEnd!!;
        const newValue = oldValue.slice(0, caretPos - 1) +
            this.state.suggestions[newIndex].glyph +
            oldValue.slice(caretPos, oldValue.length);

        this.setState({
            value: newValue,
            selectedSuggestion: newIndex
        }, () => {
            this.input.current?.setSelectionRange(caretPos - 1, caretPos);
        });
    }

    insertSuggestion(index: number) {
        const caretPos = this.input.current?.selectionEnd ?? 0;
        const oldValue = this.state.value;
        const newValue = oldValue.slice(0, caretPos - 1) +
            this.state.suggestions[index].glyph +
            oldValue.slice(caretPos, oldValue.length);

        this.setState({
            value: newValue,
            suggestions: [],
            selectedSuggestion: -1,
            mouseOverList: false
        }, () => {
            this.input.current?.focus();
            this.input.current?.setSelectionRange(caretPos, caretPos);
        });

        this.props.onChange?.(newValue)
    }

    UNSAFE_componentWillReceiveProps(newProps: IpaInputProps) {
        const newState: IpaInputState = {
            ...this.state
        };

        if (newProps.value !== this.state.value) {
            newState.value = newProps.value;

            if (newProps.value.length < this.state.value.length) {
                newState.suggestions = [];
                newState.selectedSuggestion = -1;
            }
        }

        if (newProps.language !== this.props.language) {
            newState.suggestions = [];
            newState.selectedSuggestion = -1;
        }

        this.setState(newState);
    }

    render() {
        const styles:
            {
                container: React.CSSProperties,
                input: React.CSSProperties,
                list: React.CSSProperties,
                item: React.CSSProperties,
                itemSelected: React.CSSProperties,
            }
            = {
            container: {
                position: "relative"
            },
            input: {
                position: "relative",
                zIndex: 2
            },
            list: {
                position: "absolute",
                left: 0,
                top: '100%',
                listStyle: "none",
                zIndex: 1
            },
            item: {
                display: "inline-block",
            },
            itemSelected: {
                outline: '-webkit-focus-ring-color auto 5px',
            }
        };

        return (
            <div className="IpaInput" style={styles.container}>
                <input type="text"
                    ref={this.input}
                    className="IpaInput__input"
                    style={styles.input}
                    value={this.state.value}
                    onKeyDown={this.onKeyDown.bind(this)}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)} />

                <ul className={classnames({
                    IpaInput__list: true,
                    touch: this.state.touch
                })}
                    style={styles.list}
                    onMouseOver={this.onListMouseOver.bind(this)}
                    onMouseOut={this.onListMouseOut.bind(this)}>
                    {this.state.suggestions.map((suggestion, index) => {
                        const { glyph, name } = suggestion;

                        return (
                            <li key={'IpaSuggestion' + index}
                                className={classnames({
                                    IpaInput__item: true,
                                    selected: index === this.state.selectedSuggestion
                                })}
                                style={merge(styles.item, index === this.state.selectedSuggestion ? styles.itemSelected : {})}
                                onClick={this.insertSuggestion.bind(this, index)}
                                onMouseOver={this.selectSuggestion.bind(this, index)}>

                                {this.props.showNumber && <span className="IpaInput__item__number">{index + 1}</span>}
                                <span className="IpaInput__item__glyph">{glyph}</span>
                                {this.props.showName && <span className="IpaInput__item__name">{name}</span>}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default IpaInput;