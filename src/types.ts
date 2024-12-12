export interface Button {
  id: string;
  label: string;
  url: string;
  whatsappText: string;
}

export interface Program {
  id: string;
  name: string;
  displayName: string;
  image: string;
  buttons: Button[];
}