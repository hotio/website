:material-github: [GitHub](https://github.com/hotio/sysinfo){: .header-icons target=_blank rel="noopener" }  

Get a quick system overview from the terminal, an ideal replacement for web based dashboards.

Features:

- `system info`, basic info about your system like uptime and load, on `apt-get` based systems it'll also show amount of available updates
- `ip addresses`, all the global ip addresses easily viewable
- `thermals`, get a few temperatures from the kernel provided thermal zones
- `ups info`, the important stuff you need to know about your NUT supported UPS
- `docker`, see how your docker containers are doing
- `virtual machines`, keep an eye on which vm is running
- `systemd services`, services added in the config will show up
- `smb shares`, what folder is exported and who has access, you can see it here
- `network traffic`, if vnstat is available, you can see it here
- `memory usage`, see your usage before your system experiences a OOM failure
- `disk space usage`, the same as with memory, but for disk space
- `physical drives`, spot drive health before it's too late

## Installation

```shell linenums="1"
sudo curl -fsSL "https://raw.githubusercontent.com/hotio/sysinfo.sh/master/sysinfo.sh" -o /usr/local/bin/sysinfo
sudo chmod +x /usr/local/bin/sysinfo
```

## Config

Check the script's content for the config section and available settings. Any of those settings can also be placed in a file `/etc/default/hotio-sysinfo` to allow for script updates without losing the config.

## Execution

Now execute `sysinfo --help` to see all available options, which you can combine to show what you want or just `sysinfo` to show everything. Some options require `sudo` or `root`.

## Preview

![sysinfo.sh output](../img/sysinfo.png)
