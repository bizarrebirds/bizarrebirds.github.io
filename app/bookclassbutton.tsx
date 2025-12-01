import Fab from '@mui/material/Fab';
import { EventAvailableOutlined } from '@mui/icons-material';

export default function BookClassButton() {
    return (
        <div className="bottom-4 right-4 sm:bottom-8 sm:right-8 fixed">
            <Fab variant="extended" color="primary" href="https://stembrainstutor.youcanbook.me/">
                <EventAvailableOutlined sx={{ mr: 1 }} />
                Book a Call
            </Fab>
        </div>

    )
}