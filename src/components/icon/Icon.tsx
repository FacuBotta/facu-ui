'use client';

import { InstagramIcon } from '../icons/InstagramIcon';
import { YouTubeIcon } from '../icons/YouTubeIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { MenuIcon } from '../icons/MenuIcon';
import { BurgerMenuIcon } from '../icons/BurgerMenuIcon';
import { PlusIcon } from '../icons/PlusIcon';
import { MinusIcon } from '../icons/MinusIcon';
import { HeartIcon } from '../icons/HeartIcon';
import { StarIcon } from '../icons/StarIcon';
import { SendIcon } from '../icons/SendIcon';
import { UserOffIcon } from '../icons/UserOffIcon';
import { MessageIcon } from '../icons/MessageIcon';
import { AddIcon } from '../icons/AddIcon';
import { AddUserIcon } from '../icons/AddUserIcon';
import { AddPhotoIcon } from '../icons/AddPhotoIcon';
import { EditIcon } from '../icons/EditIcon';
import { LogInIcon } from '../icons/LogInIcon';
import { LogOutIcon } from '../icons/LogOutIcon';
import { AlarmIcon } from '../icons/AlarmIcon';
import { DeleteIcon } from '../icons/DeleteIcon';
import { UserIcon } from '../icons/UserIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { CalendarIcon } from '../icons/CalendarIcon';
import { CalendarPlusIcon } from '../icons/CalendarPlusIcon';
import { EyeIcon } from '../icons/EyeIcon';
import { EyeOffIcon } from '../icons/EyeOffIcon';
import { MapSearchIcon } from '../icons/MapSearchIcon';
import { MapPinIcon } from '../icons/MapPinIcon';
import { InfoCircleIcon } from '../icons/InfoCircleIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { BellIcon } from '../icons/BellIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { FaceBookIcon } from '../icons/FaceBookIcon';
import { TikTokIcon } from '../icons/TikTokIcon';
import { DiscordIcon } from '../icons/DiscordIcon';
import { DarkThemeIcon } from '../icons/DarkThemeIcon';
import { LightThemeIcon } from '../icons/LightThemeIcon';

import { iconProps } from './iconsProps';
import { DraggableIcon } from '../icons/DraggableIcon';
import { GoBackIcon } from '../icons/GoBackIcon';

export function Icon(props: React.PropsWithoutRef<iconProps>) {
  switch (props.type) {
    case 'draggable':
      return <DraggableIcon {...props} />;
    case 'goBack':
      return <GoBackIcon {...props} />;
    case 'sun':
      return <LightThemeIcon {...props} />;
    case 'moon':
      return <DarkThemeIcon {...props} />;
    case 'instagram':
      return <InstagramIcon {...props} />;
    case 'youtube':
      return <YouTubeIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'menu':
      return <MenuIcon {...props} />;
    case 'burgerMenu':
      return <BurgerMenuIcon {...props} />;
    case 'plus':
      return <PlusIcon {...props} />;
    case 'minus':
      return <MinusIcon {...props} />;
    case 'heart':
      return <HeartIcon {...props} />;
    case 'star':
      return <StarIcon {...props} />;
    case 'send':
      return <SendIcon {...props} />;
    case 'userOff':
      return <UserOffIcon {...props} />;
    case 'message':
      return <MessageIcon {...props} />;
    case 'add':
      return <AddIcon {...props} />;
    case 'addUser':
      return <AddUserIcon {...props} />;
    case 'addPhoto':
      return <AddPhotoIcon {...props} />;
    case 'edit':
      return <EditIcon {...props} />;
    case 'logIn':
      return <LogInIcon {...props} />;
    case 'logOut':
      return <LogOutIcon {...props} />;
    case 'alarm':
      return <AlarmIcon {...props} />;
    case 'delete':
      return <DeleteIcon {...props} />;
    case 'user':
      return <UserIcon {...props} />;
    case 'linkedIn':
      return <LinkedInIcon {...props} />;
    case 'home':
      return <HomeIcon {...props} />;
    case 'calendar':
      return <CalendarIcon {...props} />;
    case 'calendarPlus':
      return <CalendarPlusIcon {...props} />;
    case 'eye':
      return <EyeIcon {...props} />;
    case 'eyeOff':
      return <EyeOffIcon {...props} />;
    case 'mapSearch':
      return <MapSearchIcon {...props} />;
    case 'mapPin':
      return <MapPinIcon {...props} />;
    case 'infoCircle':
      return <InfoCircleIcon {...props} />;
    case 'phone':
      return <PhoneIcon {...props} />;
    case 'bell':
      return <BellIcon {...props} />;
    case 'twitter':
      return <TwitterIcon {...props} />;
    case 'faceBook':
      return <FaceBookIcon {...props} />;
    case 'tikTok':
      return <TikTokIcon {...props} />;
    case 'discord':
      return <DiscordIcon {...props} />;
  }
}
