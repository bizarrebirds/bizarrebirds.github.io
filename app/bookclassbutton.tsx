import Fab from '@mui/material/Fab';
import { EventAvailableOutlined } from '@mui/icons-material';

export default function BookClassButton() {
    return (
        <div className="bottom-8 right-8 fixed">
            <Fab variant="extended" color="primary" href="https://calendly.com/stembrainstutor/30min">
                <EventAvailableOutlined sx={{ mr: 1 }} />
                Book a Call
            </Fab>
        </div>

    )
}