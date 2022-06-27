## Wireguard-Go (Userspace VPN)

This brings Support for Synology, Qnap, Systems with missing Modules.
Synology and other NAS systems are often missing the kernel modules needed for Wireguard. This often requires "System Hacks" to force-fully add the missing Modules.
This image here contains Wireguard-Go, which implements Wireguard in Userspace. It starts automatically, if the Kernel Modules are not found. 
It requires the two changes below to allow to use Wireguard.

### Additional Config for NAS

*wg0.conf*
A change to the `wg0.conf` is needed, due a long lasting bug in Wireguard with such systems.
You need to change the AllowedIPs line to have Wireguard start up properly.

```AllowedIPs = 0.0.0.0/1,128.0.0.1```

*Docker additions*

For Synos and other such systems, it is needed to add the device mapping.

Docker-Compose:
```    devices:
      - /dev/net/tun:/dev/net/tun
```
      
For Docker run:
```
--device /dev/net/tun:/dev/net/tun
```
