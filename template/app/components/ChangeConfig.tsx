import React, { useState, useEffect } from 'react'
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import SimpleButton from './SimpleButton';
import simpleButtonConfig from '../Config/config.button.json';



const ChangeConfig = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [jsonData, setJsonData] = useState(simpleButtonConfig);

    const handleChange = (key: string, value: string) => {
        setJsonData((prevData) => ({
            ...prevData,
            simpleButtonConfig: {
                ...prevData.simpleButtonConfig,
                [key]: value,
            },
        }));
        console.log(value);
    };

    const handleSave = async () => {
        try {


            localStorage.setItem('simpleButtonConfig', JSON.stringify(jsonData));
            // Ghi đè dữ liệu mới vào file JSON
            const jsonString = JSON.stringify(jsonData, null, 2);

            console.log('Data saved successfully.');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <React.Fragment>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)} className='bg-[#49bc56] text-[#ffff]'>
                Config
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Custom your theme
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        {Object.entries(jsonData.simpleButtonConfig).map(([key, value]) => (

                            // eslint-disable-next-line react/jsx-key
                            <PanelChange value={value} title={key} onChange={(e) => handleChange(key, e.target.value)} />
                        ))}
                        <div>
                            <SimpleButton text='Save' onClick={handleSave} />
                        </div>

                    </Typography>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}

export default ChangeConfig;

interface ChangeColor {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
}
export const PanelChange: React.FC<ChangeColor> = ({ value, title, onChange }) => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="text-center">{title}</div>
            <div className="flex justify-center">
                <input
                    type="color"
                    className="w-10 h-10 mt-2 border border-gray-300 rounded-lg"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}