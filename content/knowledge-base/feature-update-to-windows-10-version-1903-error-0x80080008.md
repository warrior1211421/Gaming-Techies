---
title: Feature Update to Windows 10, Version 1903 - Error 0x80080008
type: knowledge-base
draft: false
trending: false
seo_title: Feature Update to Windows 10, Version 1903 - Error 0x80080008
url: fix-update-error-0x80080008
author: Gabriel
date: 2022-04-13T14:22:36.551Z
updateDate: 2022-04-13T14:22:36.630Z
featured_Image: /uploads/error-0x80080008.webp
categories:
  - Knowledge Base
faqs:
  - answer: Microsoft provides a free Windows 10 upgrade for people with a genuine
      activated copy of Windows 7 and above.
    question: Can you still upgrade to Windows 10 for free?
  - answer: Download the Windows 10 Update Assistant from the Microsoft website.
      This tool will automatically evaluate your machine and determine whether
      you are eligible for the upgrade.
    question: How do you check if I can upgrade to Windows 10 for free?
  - answer: No, the upgrade will only modify system files. A local backup of both
      user data and system files is stored in the Windows.Old folder after
      upgrading is complete.
    question: Will upgrading to Windows 10 delete my files?
  - answer: Yes, you can still use Windows 7 after 14th January 2020. However, MS
      will not provide any updates, including security updates. Therefore, you
      will be vulnerable to the latest security threats and ransomware.
    question: Can I still use Windows 7 after 2020?
  - answer: According to Microsoft policy, every windows product is supported for 5
      years. Therefore, Windows 10 will be regularly updated till October 2025.
    question: How long will Windows 10 be supported?
---
Windows 10 was released back in July 2015. However, many people are still stuck on older versions like Windows 8.1, 8, or even windows 7. There are multiple ways to upgrade to the latest Windows 10 for free. Moreover, Microsoft also releases new feature updates from time to time, and you must upgrade to the latest build for optimum system performance. However, sometimes people encounter issues like feature updates to windows 10, version 1903 - error 0x80080008, which can be very distressing. Therefore, this article contains everything you need to know about Windows 10 updates and the solution to the common problems.

## How to Install Windows 10

Most people visit professional service centers to install a fresh copy of Windows 10 on their PC or laptops, which can be costly. Moreover, there is no guarantee that the computer will be set up according to your taste. So, the best solution is to install a fresh copy of Windows 10 yourself; here’s how:

### Method 1: Upgrade from USB

Before you get started with the installation process, it would be best to ensure these things:


* Back up your important data on an external drive.
* Confirm that the Windows 10 drivers are available for all your hardware.
* Plug in AC power even if your laptop is charged.
* Back up sensitive information such as login passwords, accounts, etc., on an external drive.
* Check whether you have a GPT or MBR file system.
* GPT file system is utilized by UEFI BIOS and supports more than 3 partitions on a single HDD.
* MBR file system is only compatible with the legacy BIOS system. It is used to create less than 3 partitions.

### Things you Need

* Download Windows 10.iso file:
* You can download an iso if you already own a Windows 10 copy or purchase it from the store.
* Alternatively, you can check your computer provider website like Dell and HP for a Windows upgrade.
* Download a Windows 10 iso file from whichever option you prefer.
* A USB flash drive with at least 8GB capacity.
* Software to make a Bootable USB drive for Windows 10:
* Rufus
* Windows 10 Media Creation Tool
* UnetBootin
* Your PC model and manufacturer, along with the serial number 
* Typically, Located at the bottom of your device.
* A working internet connection.

Now that you have all the things you need, let’s get started:

### Creating a  Bootable USB

* Insert your USB device and open RUFUS or any other booting software.
* Select your USB flash drive from the drop-down menu.
* Select the downloaded Windows 10 iso from the destination folder.
* Choose MBR or GPT depending on your BIOS system.
* Click the start button and wait for 10-30 minutes to create a Windows 10 bootable USB drive successfully.

### Installing Windows

* Plug the USB into your computer and restart into the Boot menu from BIOS
* Usually, the boot menu is accessible by pressing F10 or F8 before the windows start booting.
* However, you should check the boot menu sequence for your specific manufacturer.
* Select boot from USB in the boot menu and press the spacebar when prompted to press any key.
* At this point, if you don’t get this message, you created the wrong bootable USB drive.
* If you created with GPT, change to MBR and vice versa.
* Click install windows, select your language, and accept the terms and conditions.
* At the next screen, you will be asked to upgrade or custom install
* Custom install is used to install a clean operating system
* You’ll lose your data and files stored in a Windows drive.
* Upgrade install will only upgrade your windows system, and no personal files will be deleted except for unsupported applications.
* Select upgrade the system and follow screen instructions to complete the upgrade process.
* A folder named Windows. old is created in the windows drive. It includes all your data from the previous version of the system.
* A typical windows 10 upgrade from USB takes between 30-50 minutes to complete, and the machine restarts multiple times. So, sit back, relax and be patient.

## Method 2: Upgrade from Windows:

Windows 10 allows a free upgrade to users who own a genuine copy of Windows 8.1, 8, or 7. However, you need access to your product key to proceed with the installation.

### Things you Need

* A working internet connection.
* Reliable power source and a charged battery for laptop.
* Compatible hardware with driver compatibility.
* Product key of a genuine copy of Windows.
* Windows 10 Update Assistant
* At least 40GB of free space in the C-drive 

### Installation:

* Download and install the Windows 10 update assistant and run it.
* Select upgrade when prompted.
* The software will automatically check for hardware compatibility and driver availability.
* If you meet the minimum requirements, then proceed with the upgrade.
* Otherwise, it is best to remain on the current version of Windows and upgrade your system specs before upgrading.
* Insert your Windows product key (of any version from 7. 8. 8.1 or 10)
* The upgrade assistant will automatically download the updated version of windows 
* The computer will restart once the download is complete and proceed with the installation.
* However, it is best to remain close to the machine during the upgrade. In case anything goes wrong.
* The upgrade process takes between 1-and 2 hours before you can use your computer again.

## How to Fix Feature Update to Windows 10, Version 1903 - Error 0x80080008?

As mentioned before, Microsoft releases new builds and updates after 3 months or more. For best performance, it is recommended to update to the latest available version. However, sometimes the update fails with an error code 0x80080008. There are several reasons for this error, and it is best that you check the fixes one by one:

### Restart the Windows Update Service

The most common solution is to restart the Windows update service. This resets the functionality of the components so that the Windows can start performing normally again. 

* Search for CMD in the start menu.
* Right click on CMD and select Run as Administrator.
* Type the following commands one at a time:

net stop bits
net stop wuauserv
net start bits
net start wuauserv

* Restart the computer before checking for updates from the Windows settings.

### Delete the Corrupted Files:

Another common reason for most failed updates is one or several corrupted update files. Usually, the error triggers an endless Updating Windows screen after restart. So, deleting the corrupted files will reset the download history so that you can download a fresh copy of the new feature update. However, you must have Admin privileges to access and delete the folder.

* Open This PC from the desktop.
* Open the C drive or the disk in which you installed your Windows/
* Go to C:\Windows\SoftwareDistribution\Download.
* Press Cntrl + A to select all the files at once.
* Press Shift + Del + Enter to permanently delete the files.
* Restart your Windows and download the update from the Windows settings again.

### Run sfc Command:

Windows offers multiple ways to fix the corrupted files to resolve any errors. In this regard, the sfc command is the most effective way to get rid of any problems you are facing. 

* Search for CMD in the start menu.
* Right click on CMD and select Run as Administrator
* Type sfc/scannow in the CMD and press Enter.
* The Windows will now scan your entire computer for corrupted files and resolve any errors.
* Restart your PC when the process and complete before attempting to update again.

Alternatively, you can also try the new Windows troubleshooting feature.

* Press the Windows key and open the Windows Settings app. 
* Open Update & Security from the tiles. 
* Select Troubleshoot from the list on the left side of the screen.
* Open additional troubleshooters from the menu.
* Choose Windows Update and follow the screen instructions to fix all problems.

## Conclusion

Windows 10 is the latest Microsoft operating system in 2022. Moreover, MS also releases new feature updates to keep you protected from various security issues. However, some people encounter various errors like feature update to windows 10, version 1903 - error 0x80080008, and resolving it can be very challenging. Therefore, this article provides all the information you need for upgrading or updating your system.