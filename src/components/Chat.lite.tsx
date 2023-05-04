import ChatMessages from './ChatMessages.lite';
import ChatInput from './ChatInput.lite';
import ChatHeader from './ChatHeader.lite';
import ChatIcon from './ChatIcon.lite';
import { useStore } from '@builder.io/mitosis'

export interface ChatProps  {
    onSend?: (event: any) => void;
    onOpen?: (event: any) => void;
    onClose?: (event: any) => void;
    chat?: [];
    bgColorHeader?: string;
    bgColorChat?: string;
    bgColorIcon?: string;
    bgColorInput?: string;
    bgColorMessageChatbot?: string;
    bgColorMessagePerson?: string;
    bgColorMessageTimestamp?: string;
    textColorMessageChatbot?: string;
    textColorMessagePerson?: string;
    textColorMessageTimestamp?: string;
    textColorHeader?: string;
    textColorInput?: string;
    fillColorIcon?: string;
    margin?: string;
    boxShadow?: string;
    height?: string;
    width?: string;
    offline?: boolean;
    colorOffline?: string;
    colorOnline?: string;
    headerHeight?: string;
    inputHeight?: string;
    inputPlaceholder?: string;
    botTyping?: boolean;
    botName?: string;
}

export default function Chat(props: ChatProps) {
    const state = useStore({
        chatOpen: false,
        isTyping: '',
        stateCloseChat() {
            state.chatOpen = false
            state.isTyping = ''
            dispatchEvent(new Event('chat.close'))
            if (props.onClose) props.onClose(null);
        },
        stateOpenChat() {
            state.chatOpen = true
            state.isTyping = ''
            if (props.onOpen) props.onOpen(null);
        },
        handleTyping(isTyping) {
            if(isTyping){
                state.isTyping = 'customer'
            }else{
                state.isTyping = ''
            }
        }
    });

    return (
        <div>
            <div
                onClick={() => state.stateOpenChat()}
                style={{
                    position: 'fixed', bottom: '0px', right: '0px',
                    overflow: 'hidden',
                    transform: state.chatOpen ? 'translateY(100%)' : 'translateY(0%)',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '300ms',
                    transitionDelay: state.chatOpen ? '0ms' : '300ms'
                }}>
                <div
                    style={{
                        position: 'flex', borderRadius: '50%', cursor: 'pointer',
                        backgroundColor: props.bgColorIcon || '#025CDB',
                        margin: props.margin || '20px',
                        padding: '0.75rem',
                        fill: props.fillColorIcon || 'white'
                    }}>
                    <ChatIcon />
                </div>
            </div>
            <div
                style={{
                    position: 'fixed', bottom: '0px', right: '0px',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    width: props.width || '410px',
                    height: props.height || '700px',
                    overflow: 'hidden',
                    transform: state.chatOpen ? 'translateY(0%)' : 'translateY(100%)',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '300ms',
                    transitionDelay: state.chatOpen ? '300ms' : '0ms'
                }}>

                <div style={{
                    margin: props.margin || '20px',
                    overflow: 'hidden',
                    borderRadius: '0.75rem',
                    boxShadow: props.boxShadow || 'rgba(0,0,0,0.4) 0 0 6px',
                    maxHeight: props.margin ? 'calc(100% - ' + props.margin + ' - ' + props.margin + ')' : 'calc(100% - 40px)',
                    maxWidth: props.margin ? 'calc(100% - ' + props.margin + ' - ' + props.margin + ')' : 'calc(100% - 40px)',
                    width: props.width && props.margin ? 'calc(' + props.width + ' - ' + props.margin + ' - ' + props.margin + ')' :
                        props.width ? 'calc(' + props.width + ' - 40px)' :
                            props.margin ? 'calc(410px - ' + props.margin + ' - ' + props.margin + ')' : 'calc(410px - 40px)',
                    height: props.height && props.margin ? 'calc(' + props.height + ' - ' + props.margin + ' - ' + props.margin + ')' :
                        props.height ? 'calc(' + props.height + ' - 40px)' :
                            props.margin ? 'calc(700px - ' + props.margin + ' - ' + props.margin + ')' : 'calc(700px - 40px)',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
                        <ChatHeader
                            closeChat={state.stateCloseChat}
                            headerHeight={props.headerHeight}
                            bgColorHeader={props.bgColorHeader}
                            bgColorIcon={props.bgColorIcon}
                            textColorHeader={props.textColorHeader}
                            fillColorIcon={props.fillColorIcon}
                            offline={props.offline}
                            colorOffline={props.colorOffline}
                            colorOnline={props.colorOnline}
                            botName={props.botName}
                        />
                        <ChatMessages
                            bgColorChat={props.bgColorChat}
                            bgColorMessageChatbot={props.bgColorMessageChatbot}
                            bgColorMessagePerson={props.bgColorMessagePerson}
                            bgColorMessageTimestamp={props.bgColorMessageTimestamp}
                            textColorMessageChatbot={props.textColorMessageChatbot}
                            textColorMessagePerson={props.textColorMessagePerson}
                            textColorMessageTimestamp={props.textColorMessageTimestamp}
                            chat={props.chat}
                            isTyping={state.isTyping}
                            botTyping={props.botTyping}
                        />
                        <ChatInput
                            handleTyping={state.handleTyping}
                            handleSend={props.onSend}
                            inputHeight={props.inputHeight}
                            bgColorInput={props.bgColorInput}
                            textColorInput={props.textColorInput}
                            inputPlaceholder={props.inputPlaceholder}
                        />
                    </div>
                </div >
            </div >
        </div >
    );
}
