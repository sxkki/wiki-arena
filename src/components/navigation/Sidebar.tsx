"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, ChevronLeft, ChevronRight, Home, Crosshair, Disc, Shirt, Map, Package, Key, Pill, Apple, Skull, Smartphone, ChevronUp, ChevronDown } from 'lucide-react'
import { useTheme } from "@/components/contexts/ThemeContext";

type MenuItem = {
    icon: React.ElementType;
    text: string;
    href?: string;
    subItems?: string[];
}

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isMobile, setIsMobile] = useState(false);
    const [expandedItems, setIsExpandedItems] = useState<{ [key: string]: boolean }>({})
    // const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null)
    const [selectedItem, setSelectedItem] = useState<string | null>(null)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleExpanded = (text: string) => {
        setIsExpandedItems(prev => ({ ...prev, [text]: !prev[text] }))
    }

    const handleItemClick = (item: MenuItem, subItem?: string) => {
        setSelectedItem(subItem || item.text)
        if(isMobile){
            setIsCollapsed(true);
        }
    }

    const menuItems: MenuItem[] = [
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
    
    return (
        <div className={`fixed left-0 top-0 h-full transition-all duration-500 ease-in-out
            ${isCollapsed ? 'w-16' : 'w-64'}
            bg-white bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-60
            backdrop-blur-md shadow-lg z-50`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4">
                    {!isCollapsed && <h1 className="text-xl font-bold text-gray-800 dark:text-white">Arena Breakout</h1>}
                    <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    {isCollapsed ? (<ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />) : (<ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />)}
                    </button>
                    </div>
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="space-y-2 p-2">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <div className="flex flex-col">
                                        <a href={item.href} className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${selectedItem === item.text ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                                        onClick={(e) => {e.preventDefault();
                                            if(item.subItems){
                                                toggleExpanded(item.text);
                                            } else {
                                                handleItemClick(item);
                                            }
                                        }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <item.icon className="w-6 h-6 text-gray-600 dark:text-gray-300"/>
                                                {!isCollapsed && <span className="text-gray-800 dark:text-white">{item.text}</span>}
                                            </div>
                                            {!isCollapsed && item.subItems && (
                                            expandedItems[item.text] ? (<ChevronUp className="w-4 h-4 text-gray-600 dark:text-gray-300" />) : (<ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />)
                                            )}
                                        </a>
                                        {!isCollapsed && item.subItems && expandedItems[item.text] && (
                                            <ul className="ml-6 mt-2 space-y-2">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a href={`${item.href}/${subItem.toLowerCase().replace(/ /g, '-')}`} className={`block p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm text-gray-600 dark:text-gray-400 ${selectedItem === subItem ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleItemClick(item, subItem);
                                                        }}
                                                        >
                                                            {subItem}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="p-4 mt-auto">
                        <button onClick={toggleDarkMode} className=" flex items-center justify-center w-full p-2 rounded-lg
                        bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
                        transition-colors">
                            {isDarkMode ? (
                                <Sun className="w-6 h-6 text-yellow-500"/>
                            ) : (
                                <Moon className="w-6 h-6 text-gray-600"/>
                            )}
                            {!isCollapsed && (<span className="text-gray-800 dark:text-white">{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>)}
                        </button>
                    </div>
                </div>
            </div>
    );
}
