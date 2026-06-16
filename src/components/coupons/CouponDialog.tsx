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

export default function CouponDialog({
  open,
  coupon,
  onClose,
  onSave,
}: any) {
  const emptyForm = {
    code: "",
    discount_type:
      "percentage",

    discount_value: 0,

    validity_type:
      "one_time",

    max_usage: 1,

    expiry_date: "",
  };

  const [form, setForm] =
    useState(emptyForm);

  useEffect(() => {
    if (!open) return;

    if (coupon) {
      setForm({
        code:
          coupon.code || "",

        discount_type:
          coupon.discount_type ||
          "percentage",

        discount_value:
          Number(
            coupon.discount_value
          ) || 0,

        validity_type:
          coupon.validity_type ||
          "one_time",

        max_usage:
          Number(
            coupon.max_usage
          ) || 1,

        expiry_date:
          coupon.expiry_date
            ?.split("T")[0] ||
          "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [coupon, open]);

  const handleSave = () => {
    onSave({
      code: form.code,

      discount_type:
        form.discount_type,

      discount_value:
        Number(
          form.discount_value
        ),

      validity_type:
        form.validity_type,

      max_usage: Number(
        form.max_usage
      ),

      expiry_date:
        form.expiry_date,
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
        {coupon
          ? "Edit Coupon"
          : "Create Coupon"}
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Coupon Code"
          value={form.code}
          onChange={(e) =>
            setForm({
              ...form,
              code:
                e.target.value,
            })
          }
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Discount Type"
          value={
            form.discount_type
          }
          onChange={(e) =>
            setForm({
              ...form,
              discount_type:
                e.target.value,
            })
          }
        >
          <MenuItem value="percentage">
            Percentage
          </MenuItem>

          <MenuItem value="fixed">
            Fixed
          </MenuItem>
        </TextField>

        <TextField
          fullWidth
          margin="normal"
          label="Discount Value"
          type="number"
          value={
            form.discount_value
          }
          onChange={(e) =>
            setForm({
              ...form,
              discount_value:
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
          label="Validity Type"
          value={
            form.validity_type
          }
          onChange={(e) =>
            setForm({
              ...form,
              validity_type:
                e.target.value,
            })
          }
        >
          <MenuItem value="one_time">
            One Time
          </MenuItem>

          <MenuItem value="lifetime">
            Lifetime
          </MenuItem>

          <MenuItem value="every_renewal">
            Every Renewal
          </MenuItem>
        </TextField>

        <TextField
          fullWidth
          margin="normal"
          label="Max Usage"
          type="number"
          value={
            form.max_usage
          }
          onChange={(e) =>
            setForm({
              ...form,
              max_usage:
                Number(
                  e.target.value
                ),
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          type="date"
          value={
            form.expiry_date
          }
          onChange={(e) =>
            setForm({
              ...form,
              expiry_date:
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