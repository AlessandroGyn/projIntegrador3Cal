import React, {useState} from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

// eslint-disable-next-line 
export default function ({isOpen, onClose, onEventAdded}) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();
        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

    return(
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder="Informe: Nome - Telefone - Serviço" value={title} onChange={e => setTitle(e.target.value)} />
                <div>
                    <label>Data Início</label>
                    <Datetime value={start} onChange={date => setStart(date)} />
                </div>
                <div>
                    <label>Data Fim</label>
                    <Datetime value={end} onChange={date => setEnd(date)} />
                </div>
                <button>Agende seu horário</button>
            </form>
        </Modal>
    )
}