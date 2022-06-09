import React from 'react';
import Modal from "react-modal";
import Calendar from './Calendar';

Modal.setAppElement("#root");

export default function Agendamento() {
    return (
        <Calendar />
    );
}