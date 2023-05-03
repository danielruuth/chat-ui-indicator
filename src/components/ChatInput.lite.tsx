import { useStore } from '@builder.io/mitosis';

export interface ChatInputProps {
    handleSend?: (event: any) => void;
    inputHeight?: string;
    bgColorInput?: string;
    textColorInput?: string;
    inputPlaceholder?: string;
    handleTyping?: (event:any) => void;
}


export default function ChatInput(props: ChatInputProps) {
    const state = useStore({
        inputField: '',
        timeoutVar:null,
        sendMessage: (e: any) => {
            e.preventDefault();
            if (props.handleSend) props.handleSend(state.inputField);
            state.dismissTyping(null);
            state.inputField = '';
        },
        indicateMessage: (e: any) => {
            state.inputField = e.target.value
            if(props.handleTyping) props.handleTyping(true)
            if(state.timeoutVar){
                clearTimeout(state.timeoutVar)
            }
            state.timeoutVar = setTimeout(()=>{
                state.dismissTyping(null)
            },3000)

        },
        dismissTyping: (e: any) => {
            if(props.handleTyping) props.handleTyping(false)
        }
    });

    return (
        <form onSubmit={(event) => state.sendMessage(event)}
        style={{
            display: 'flex',
            height: props.inputHeight || '60px',
            backgroundColor: props.bgColorInput || 'white',
            color: props.textColorInput || 'black',
        }}>
            <input onInput={(event) => state.indicateMessage(event)} placeholder={props.inputPlaceholder || 'Type your message here'}
                value={state.inputField}
                style={{
                    borderWidth: '0px',
                    backgroundColor: props.bgColorInput || 'white',
                    color: props.textColorInput || 'black',
                    width: '100%',
                    marginLeft: '1rem',
                    fontSize: '1rem',
                }}
                css={{
                    '&:focus': {
                        outline: 'none'
                    },
                }} />
            <button style={{
                backgroundColor: props.bgColorInput || 'white',
                flexShrink: '0', all: 'unset', cursor: 'pointer', margin: 'auto 1rem'
            }}>
                {/* @ts-ignore */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" style={{ height: '1.5rem', width: '1.5rkm' }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
        </form>
    );
}
