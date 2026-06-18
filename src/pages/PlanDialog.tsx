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

export default function PlanDialog({
  open,
  onClose,
  plan,
  onSave,
}: any) {
  const emptyForm = {
    name: "",
    description: "",
    price: "",
    property_limit: 1,
    billing_cycle:
      "monthly",
  };

  const [form, setForm] =
    useState(emptyForm);

  useEffect(() => {
    if (!open) return;

    if (plan) {
      setForm({
        name:
          plan.name || "",

        description:
          plan.description ||
          "",

        price:
          String(
            plan.price || ""
          ),

        property_limit:
          Number(
            plan.property_limit
          ) || 1,

        billing_cycle:
          plan.billing_cycle ||
          "monthly",
      });
    } else {
      setForm(emptyForm);
    }
  }, [plan, open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {plan
          ? "Edit Plan"
          : "Create Plan"}
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Plan Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name:
                e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Description"
          value={
            form.description
          }
          onChange={(e) =>
            setForm({
              ...form,
              description:
                e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          type="number"
          label="Price"
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price:
                e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          type="number"
          label="Property Limit"
          value={
            form.property_limit
          }
          onChange={(e) =>
            setForm({
              ...form,
              property_limit:
                Number(
                  e.target.value
                ),
            })
          }
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Billing Cycle"
          value={
            form.billing_cycle
          }
          onChange={(e) =>
            setForm({
              ...form,
              billing_cycle:
                e.target.value,
            })
          }
        >
          <MenuItem value="monthly">
            Monthly
          </MenuItem>

          <MenuItem value="yearly">
            Yearly
          </MenuItem>

          <MenuItem value="lifetime">
            Lifetime
          </MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            onSave({
              name: form.name,
              description:
                form.description,
              price:
                Number(
                  form.price
                ),
              property_limit:
                Number(
                  form.property_limit
                ),
              billing_cycle:
                form.billing_cycle,
            })
          }
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}