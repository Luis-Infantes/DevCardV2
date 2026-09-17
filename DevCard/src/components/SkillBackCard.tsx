import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Badge } from 'reactstrap';
import type { SkillBackProps, skillBack} from '../types/types';
import { useState } from 'react';
import * as React from "react";




export const SkillBackCard: React.FC<SkillBackProps> = ({ skillsBack }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    //Creamos un switch para dar un estilo de color dependiendo del nivel
    const levelColor = (level: skillBack["level"]) => {

        switch (level) {

            case "Basic":
                return "secondary";
                
            case "Advanced":
                return "success";

            case "Expert":
                return "primary";
                
        }
    };



    return (

        <>

            <Button className="Button-Style"  onClick={toggle}>
                Backend
            </Button>


            <Modal
                isOpen={open}
                toggle={toggle}
                className="myModal"            
                modalClassName="myModalDialog" 
                contentClassName="myModalContent" 
                wrapClassName="myModalBackdrop"   
            >


                <ModalHeader  className="myModalHeader">Back-end Skills</ModalHeader>

                <ModalBody className="myModalBody">

                    <ul className="list-unstyled mb-0">
                        {skillsBack.map((skill: skillBack) => (
                            <li key={skill.id} className="d-flex align-items-center gap-2 mb-2">

                                <img
                                    src={`/image/${skill.image}`}
                                    alt={`Logo de ${skill.name}`}
                                    className="skill-icon"
                                    width={24}
                                    height={24}
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback si la imagen no existe
                                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                                    }}
                                />


                                <strong>{skill.name}</strong>
                                <Badge color={levelColor(skill.level)} pill>
                                    {skill.level}
                                </Badge>
                            </li>
                        ))}
                    </ul>

                </ModalBody>

                <ModalFooter className="myModalFooter">
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>

            </Modal>
        </>



    );
}