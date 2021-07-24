import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function AlertComponent(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = () => {
    // mengambil data dari reducers / sifatnya sama kayak useState
    const { id, message, typeToast } = useSelector((state) => state.alert);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        id && setOpen(true);
    }, [id]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    // logic AlertComponent
    let alertMessage;

    if (typeToast === 1) {
        alertMessage = <AlertComponent severity="success">{message}</AlertComponent>;
    } else if (typeToast === 2) {
        alertMessage = <AlertComponent severity="warning">{message}</AlertComponent>;
    } else if (typeToast === 3) {
        alertMessage = <AlertComponent severity="error">{message}</AlertComponent>;
    }
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                {alertMessage}
            </Snackbar>
        </>
    );
};

export default Alert;
