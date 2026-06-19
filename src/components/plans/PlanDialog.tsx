import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  plan: any;
  onSave: (data: any) => void;
}

export default function PlanDialog({
  open,
  onClose,
  plan,
  onSave,
}: Props) {
  const [form, setForm] =
    useState({
      name: "",
      description: "",
      price: "",
      property_limit: 1,
      razorpay_plan_id: "",
  });

  useEffect(() => {
    if (open) {
      if (plan) {
        setForm({
          name:
            plan.name || "",
          description:
            plan.description ||
            "",
          price:
            String(
              plan.price
            ) || "",
          property_limit:
            Number(
              plan.property_limit
            ) || 1,
          razorpay_plan_id:
            plan.razorpay_plan_id ||
            "",
        });
      } else {
        setForm({
              name: "",
              description: "",
              price: "",
              property_limit: 1,
              razorpay_plan_id: "",
        });      
      }
    }
  }, [plan, open]);

  const handleSave = () => {
    onSave({
        name: form.name,
        description:
          form.description,
        price:
          Number(form.price),
        property_limit:
          Number(
            form.property_limit
          ),
            razorpay_plan_id:
              form.razorpay_plan_id,
            is_active: true,
          });
  };

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
          label="Price"
          type="number"
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
          label="Property Limit"
          type="number"
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
            fullWidth
            margin="normal"
            label="Razorpay Plan ID"
            value={
              form.razorpay_plan_id
            }
            onChange={(e) =>
              setForm({
                ...form,
                razorpay_plan_id:
                  e.target.value,
              })
            }
          />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}