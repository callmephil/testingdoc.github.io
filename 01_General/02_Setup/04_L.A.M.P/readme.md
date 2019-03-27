# LAMP

Installing a simple LAMP Stack.

LAMP stands for:

- Linux
- Apache
- MySQL
- PHP

There's nothing specific in this particular choice of technology, other than it has been popular for long and a lot of open source applications expect those things to be available.

If everything went well, you already have a Linux system. You need to install the rest.

## Goals

  - Learn how a LAMP stack works
  - Edit configuration files
  - **Competencies**:
    - <kbd>Command line editors</kbd> 
    - <kbd>Configuration files</kbd>
    - <kbd>Sysadmin</kbd> 

## Notes

- You will find plenty of tutorials online; *be careful*, that stuff changes **fast**, and if the tutorial is old, it will not only not work, but will likely tell you to do things which will mess up your system. Read tutorials for reference, but try to follow the official documentation of whatever flavor of Linux you're using
- MySQL might be called MariaDB in place. No worries, it's [almost the same thing](https://en.wikipedia.org/wiki/MariaDB)
- Do *not* use auto-installers such as XAMPP MAMPP, of course
- *do* take a moment to read about those different pieces and understand how they fit together. You will diminish your changes of breaking things

## Tasks

- Install Apache, PHP, MySQL
- Configure Apache to use PHP
- Create a php file that contains the text `<?php phpinfo(); ?>`. Make sure it works. <kbd>🔑🔑🔑</kbd>
- Configure PHP to be able to use MariaDB
- Install PHPMyAdmin, make sure it works <kbd>🔑🔑</kbd>
- Congrats! you have a working LAMP!