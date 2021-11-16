import './style.css';

function Notify(props) {

    const {notifyType, message} = props

    return(
        <div className="notify-container">
            <div className={`notify-${notifyType}`}>
                <div className="nofity-content">
                    <div className="nofity-message">
                        {message}
                    </div>
                    <div className="notify-close">
                        <ion-icon name="close-outline" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Notify