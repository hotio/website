## WireGuard

!!! info

    This image includes VPN support. The cli/compose examples below are environment variables and settings complementary to the app image examples, this means you'll have to add/merge the stuff below with the stuff above. In case you are still in need of a VPN, consider using my affiliate links for [Proton VPN](https://hotio.dev/protonvpn){: target=_blank rel="noopener" }, [Proton Mail](https://hotio.dev/protonmail){: target=_blank rel="noopener" }, [Proton Drive](https://hotio.dev/protondrive){: target=_blank rel="noopener" }, [Proton Pass](https://hotio.dev/protonpass){: target=_blank rel="noopener" } or [Private Internet Access](https://hotio.dev/pia){: target=_blank rel="noopener" }.
  
<img src="https://go.getproton.me/aff_i?offer_id=26&aff_id=7223" width="0" height="0" style="position:absolute;visibility:hidden;" border="0" />
<a href="https://hotio.dev/protonvpn" target="_blank" rel="noopener">
  <img id="vpnbanner" src="/img/protonvpn@2x.png" alt="ProtonVPN" width="320" height="50">
</a>
<a href="https://hotio.dev/pia" target="_blank" rel="noopener">
  <img id="vpnbanner" src="/img/piavpn728x90.png" alt="PiaVPN" width="404" height="50">
</a>

=== "generic"

    === "cli"

        ```shell linenums="1"
        docker run --rm \
            --hostname container-name.internal \ #(18)
            -e VPN_ENABLED="true" \ #(5)
            -e VPN_CONF="wg0" \ #(8)
            -e VPN_PROVIDER="generic" \ #(4)
            -e VPN_LAN_NETWORK="192.168.1.0/24" \ #(1)
            -e VPN_LAN_LEAK_ENABLED="false" \ #(10)
            -e VPN_EXPOSE_PORTS_ON_LAN="" \ #(2)
            -e VPN_AUTO_PORT_FORWARD="false" \ #(6)
            -e VPN_AUTO_PORT_FORWARD_TO_PORTS="" \ #(15)
            -e VPN_FIREWALL_TYPE="auto" \ #(17)
            -e VPN_HEALTHCHECK_ENABLED="false" \ #(20)
            -e VPN_NAMESERVERS="" \ #(16)
            -e PRIVOXY_ENABLED="false" \ #(19)
            -e UNBOUND_ENABLED="false" \
            -e UNBOUND_NAMESERVERS="" \
            --cap-add=NET_ADMIN \
            --sysctl="net.ipv4.conf.all.src_valid_mark=1" \ #(12)
            --sysctl="net.ipv6.conf.all.disable_ipv6=1" \ #(3)
            --device /dev/net/tun:/dev/net/tun \ # OPTIONAL(9)
            ...
        ```

        --8<-- "includes/annotations.md"

    === "compose"

        ```yaml linenums="1"
        services:
          app:
            hostname: container-name.internal #(18)
            environment:
              - VPN_ENABLED=true #(5)
              - VPN_CONF=wg0 #(8)
              - VPN_PROVIDER=generic #(4)
              - VPN_LAN_NETWORK=192.168.1.0/24 #(1)
              - VPN_LAN_LEAK_ENABLED=false #(10)
              - VPN_EXPOSE_PORTS_ON_LAN #(2)
              - VPN_AUTO_PORT_FORWARD=false #(6)
              - VPN_AUTO_PORT_FORWARD_TO_PORTS= #(15)
              - VPN_FIREWALL_TYPE=auto #(17)
              - VPN_HEALTHCHECK_ENABLED=false #(20)
              - VPN_NAMESERVERS= #(16)
              - PRIVOXY_ENABLED=false #(19)
              - UNBOUND_ENABLED=false
              - UNBOUND_NAMESERVERS
            cap_add:
              - NET_ADMIN
            sysctls:
              - net.ipv4.conf.all.src_valid_mark=1 #(12)
              - net.ipv6.conf.all.disable_ipv6=1 #(3)
            devices:
              - /dev/net/tun:/dev/net/tun # OPTIONAL(9)
            ...
        ```

        --8<-- "includes/annotations.md"

=== "proton"

    === "cli"

        ```shell linenums="1"
        docker run --rm \
            --hostname container-name.internal \ #(18)
            -e VPN_ENABLED="true" \ #(5)
            -e VPN_CONF="wg0" \ #(8)
            -e VPN_PROVIDER="proton" \ #(4)
            -e VPN_LAN_NETWORK="192.168.1.0/24" \ #(1)
            -e VPN_LAN_LEAK_ENABLED="false" \ #(10)
            -e VPN_EXPOSE_PORTS_ON_LAN="" \ #(2)
            -e VPN_AUTO_PORT_FORWARD="true" \ #(6)
            -e VPN_AUTO_PORT_FORWARD_TO_PORTS="" \ #(15)
            -e VPN_FIREWALL_TYPE="auto" \ #(17)
            -e VPN_HEALTHCHECK_ENABLED="false" \ #(20)
            -e VPN_NAMESERVERS="" \ #(16)
            -e PRIVOXY_ENABLED="false" \ #(19)
            -e UNBOUND_ENABLED="false" \
            -e UNBOUND_NAMESERVERS="" \
            --cap-add=NET_ADMIN \
            --sysctl="net.ipv4.conf.all.src_valid_mark=1" \ #(12)
            --sysctl="net.ipv6.conf.all.disable_ipv6=1" \ #(3)
            --device /dev/net/tun:/dev/net/tun \ # OPTIONAL(9)
            ...
        ```

        --8<-- "includes/annotations.md"

    === "compose"

        ```yaml linenums="1"
        services:
          app:
            hostname: container-name.internal #(18)
            environment:
              - VPN_ENABLED=true #(5)
              - VPN_CONF=wg0 #(8)
              - VPN_PROVIDER=proton #(4)
              - VPN_LAN_NETWORK=192.168.1.0/24 #(1)
              - VPN_LAN_LEAK_ENABLED=false #(10)
              - VPN_EXPOSE_PORTS_ON_LAN #(2)
              - VPN_AUTO_PORT_FORWARD=true #(6)
              - VPN_AUTO_PORT_FORWARD_TO_PORTS= #(15)
              - VPN_FIREWALL_TYPE=auto #(17)
              - VPN_HEALTHCHECK_ENABLED=false #(20)
              - VPN_NAMESERVERS= #(16)
              - PRIVOXY_ENABLED=false #(19)
              - UNBOUND_ENABLED=false
              - UNBOUND_NAMESERVERS
            cap_add:
              - NET_ADMIN
            sysctls:
              - net.ipv4.conf.all.src_valid_mark=1 #(12)
              - net.ipv6.conf.all.disable_ipv6=1 #(3)
            devices:
              - /dev/net/tun:/dev/net/tun # OPTIONAL(9)
            ...
        ```

        --8<-- "includes/annotations.md"

=== "pia"

    === "cli"

        ```shell linenums="1"
        docker run --rm \
            --hostname container-name.internal \ #(18)
            -e VPN_ENABLED="true" \ #(5)
            -e VPN_CONF="wg0" \ #(8)
            -e VPN_PROVIDER="pia" \ #(4)
            -e VPN_LAN_NETWORK="192.168.1.0/24" \ #(1)
            -e VPN_LAN_LEAK_ENABLED="false" \ #(10)
            -e VPN_EXPOSE_PORTS_ON_LAN="" \ #(2)
            -e VPN_AUTO_PORT_FORWARD="true" \ #(6)
            -e VPN_AUTO_PORT_FORWARD_TO_PORTS="" \ #(15)
            -e VPN_FIREWALL_TYPE="auto" \ #(17)
            -e VPN_HEALTHCHECK_ENABLED="false" \ #(20)
            -e VPN_NAMESERVERS="" \ #(16)
            -e VPN_PIA_USER="" \ #(11)
            -e VPN_PIA_PASS="" \ #(11)
            -e VPN_PIA_PREFERRED_REGION="" \ #(7)
            -e VPN_PIA_DIP_TOKEN="no" \ #(13)
            -e VPN_PIA_PORT_FORWARD_PERSIST="false" \ #(14)
            -e PRIVOXY_ENABLED="false" \ #(19)
            -e UNBOUND_ENABLED="false" \
            -e UNBOUND_NAMESERVERS="" \
            --cap-add=NET_ADMIN \
            --sysctl="net.ipv4.conf.all.src_valid_mark=1" \ #(12)
            --sysctl="net.ipv6.conf.all.disable_ipv6=1" \ #(3)
            --device /dev/net/tun:/dev/net/tun \ # OPTIONAL(9)
            ...
        ```

        --8<-- "includes/annotations.md"

    === "compose"

        ```yaml linenums="1"
        services:
          app:
            hostname: container-name.internal #(18)
            environment:
              - VPN_ENABLED=true #(5)
              - VPN_CONF=wg0 #(8)
              - VPN_PROVIDER=pia #(4)
              - VPN_LAN_NETWORK=192.168.1.0/24 #(1)
              - VPN_LAN_LEAK_ENABLED=false #(10)
              - VPN_EXPOSE_PORTS_ON_LAN #(2)
              - VPN_AUTO_PORT_FORWARD=true #(6)
              - VPN_AUTO_PORT_FORWARD_TO_PORTS= #(15)
              - VPN_FIREWALL_TYPE=auto #(17)
              - VPN_HEALTHCHECK_ENABLED=false #(20)
              - VPN_NAMESERVERS= #(16)
              - VPN_PIA_USER #(11)
              - VPN_PIA_PASS #(11)
              - VPN_PIA_PREFERRED_REGION #(7)
              - VPN_PIA_DIP_TOKEN=no #(13)
              - VPN_PIA_PORT_FORWARD_PERSIST=false #(14)
              - PRIVOXY_ENABLED=false #(19)
              - UNBOUND_ENABLED=false
              - UNBOUND_NAMESERVERS
            cap_add:
              - NET_ADMIN
            sysctls:
              - net.ipv4.conf.all.src_valid_mark=1 #(12)
              - net.ipv6.conf.all.disable_ipv6=1 #(3)
            devices:
              - /dev/net/tun:/dev/net/tun # OPTIONAL(9)
            ...
        ```

        --8<-- "includes/annotations.md"
