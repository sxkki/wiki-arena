import { Home, Crosshair, Disc, Shirt, Map, Package, Key, Pill, Apple, Skull, Smartphone } from 'lucide-react';

export type MenuItem = {
    icon: React.ElementType;
    text: string;
    href?: string;
    subItems?: string[];
}

export const menuItems: MenuItem[] = [
    { icon: Home, text: "Home", href: "/" },
    { icon: Crosshair, text: "Weapons", href: "/weapons", subItems: ["Assault Rifles", "SMG", "LMG", "MARKSMAN", "SNIPER", "SHOTGUN", "PISTOL"] },
    { icon: Disc, text: "Ammo", href: "/ammo", subItems: ["Caliber 9x19", "Caliber 9x39", "Caliber 7.62x54", "Caliber 7.62x51", "Caliber 7.62x39", "Caliber 7.62x25", "Caliber 5.8x42", "Caliber 5.7x28", "Caliber 5.56x45", "Caliber 5.45x39", "Caliber .45", "Caliber .44", "Caliber .338", "Caliber 12x70", "Caliber 12.7x99"] },
    { icon: Shirt, text: "Gear", href: "/gear", subItems: ["Backpacks", "Helmets", "Headsets", "Masks", "Gas Masks", "Body Armor", "Armored Rigs", "Chest Rigs", "Throwables"] },
    { icon: Map, text: "Maps", href: "/maps", subItems: ["Valley", "Farm", "Armory", "Tv Station", "Northrigde", "Port"] },
    { icon: Package, text: "Items", href: "/items", subItems: ["Building Materials", "Computer Parts", "Tools", "Houselhold Items", "Medical Items", "Paper", "Intruments", "Boss Token", "Electronics", "Collectibles"] },
    { icon: Key, text: "Keys", href: "/keys", subItems: ["Valley Keys", "Farm Keys", "Armory Keys", "Tv Station Keys", "NorthBridge Keys", "Port Keys"] },
    { icon: Pill, text: "Meds", href: "/meds", subItems: ["Painkilers", "Bandages", "Aid Kit", "Inyects"] },
    { icon: Apple, text: "Provisions", href: "/provisions", subItems: ["Food", "Beverages"] },
    { icon: Skull, text: "Bosses", href: "/bosses", subItems: ["Farm Bosses", "Valley Boss", "Northridge Boss", "Armory Boss", "Port Boss", "Tv Station Boss"] },
    { icon: Smartphone, text: "Supported Devices", href: "/devices" },
];