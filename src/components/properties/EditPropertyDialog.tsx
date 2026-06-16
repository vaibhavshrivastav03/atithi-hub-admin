import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  property: any;
  onSave: (data: any) => void;
}

export default function EditPropertyDialog({
  open,
  onClose,
  property,
  onSave,
}: Props) {
  const [form, setForm] =
    useState({
      name: "",
      city: "",
      address: "",
      status: "active",
    });

  useEffect(() => {
    if (property) {
      setForm({
        name:
          property.property_name || "",

        city:
          property.city || "",

        address:
          property.property_address || "",

        status:
          property.status || "active",
      });
    }
  }, [property, open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Edit Property
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Property Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="City"
          value={form.city}
          onChange={(e) =>
            setForm({
              ...form,
              city: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Address"
          value={form.address}
          onChange={(e) =>
            setForm({
              ...form,
              address:
                e.target.value,
            })
          }
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Status"
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status:
                e.target.value,
            })
          }
        >
          <MenuItem value="active">
            Active
          </MenuItem>

          <MenuItem value="inactive">
            Inactive
          </MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            onSave(form)
          }
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}