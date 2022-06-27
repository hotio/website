## Wireguard-Go (Userspace)

This brings support for Synology, Qnap or other systems with missing kernel modules. It requires the following two changes.

A change to your `wg0.conf` is needed, due to a long lasting bug in Wireguard on these systems. You'll need to change the `AllowedIPs` line to have Wireguard start up properly.

```text
...
[Peer]
...
AllowedIPs = 0.0.0.0/1,128.0.0.1
...
```

Next, you'll also need to add a device mapping.

!!! docker ""

    === "cli"

        ```shell
        --device /dev/net/tun:/dev/net/tun
        ```

    === "compose"

        ```yaml
        devices:
          - /dev/net/tun:/dev/net/tun
        ```
