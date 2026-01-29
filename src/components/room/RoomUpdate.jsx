import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../campus/Campus.css";

const RoomUpdate = ({ room, goBack }) => {
    const [name, setName] = useState(room?.name || "");
    const [capacity, setCapacity] = useState(room?.capacity || "");
    const [blockId, setBlockId] = useState(room?.blockId || "");
    const [floor, setFloor] = useState(room?.floor || "");
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8080/api/v1/blocks", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBlocks(response.data);
            } catch (error) {
                toast.error("Erro ao carregar blocos.");
            }
        };
        fetchBlocks();
    }, []);

    const updateRoom = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:8080/api/v1/rooms/${room.id}`, {
                name,
                capacity: Number(capacity),
                blockId: Number(blockId),
                floor
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success("Sala atualizada com sucesso!");
            goBack();
        } catch {
            toast.error("Erro ao atualizar sala.");
        }
    };

    return (
        <div className="room-page">
            <div className="container-room">
                <h1>Editar Sala: {room.name}</h1>
                <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Capacidade" type="number" value={capacity} onChange={e => setCapacity(e.target.value)} />

                <select value={blockId} onChange={e => setBlockId(e.target.value)}>
                    <option value="">Selecione o Bloco</option>
                    {blocks.map(block => (
                        <option key={block.id} value={block.id}>{block.name}</option>
                    ))}
                </select>

                <input placeholder="Andar" value={floor} onChange={e => setFloor(e.target.value)} />

                <button onClick={updateRoom}>Salvar Alterações</button>
                <button onClick={goBack}>Voltar</button>
            </div>
        </div>
    );
};

export default RoomUpdate;