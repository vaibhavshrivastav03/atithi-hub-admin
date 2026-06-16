export interface Owner {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;

  is_free_forever: boolean;
  custom_price: number | null;
}

export interface OwnersResponse {
  success: boolean;
  count: number;
  owners: Owner[];
}