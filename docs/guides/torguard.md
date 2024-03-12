Here are the required steps we need to take in order to get a WireGuard `conf` file with port forwarding enabled.

## Changing Service Credentials

First we're going to change the default credentials under [Manage Credentials](https://torguard.net/clientarea.php?action=changepw){: target=_blank rel="noopener" }. This step is optional though if you've already done it or wish to keep using the defaults.

<img id="torguardImages" src="/img/torguard_credentials.png" alt="TorGuard Credentials">

Hit `Generate Random Login`. After it's done, save the credentials. We'll need them soon.

<img id="torguardImages" src="/img/torguard_credentials_generated.png" alt="TorGuard Credentials Generated">

## Config Generator

We'll generate a new WireGuard config on the [Config Generator](https://torguard.net/tgconf.php?action=vpn-openvpnconfig){: target=_blank rel="noopener" } page. Fill in the details like shown below, use your own server preference.

<img id="torguardImages" src="/img/torguard_config_generator.png" alt="TorGuard Config Generator">

Hit `Generate Config`. You'll get your config as seen below.

<img id="torguardImages" src="/img/torguard_config_generator_output.png" alt="TorGuard Config Generator Output">

## Test WireGuard Config

You can now use your created `conf` file and add it to the VPN image per the instructions. When executing the image and all went well you'll see:

```text
[INF] [2024-03-12 07:29:51] [VPN] Performing internet connectivity test...
[INF] [2024-03-12 07:29:51] [VPN] [IPV4] [PING: 25.167 ms] [Amsterdam, NH, The Netherlands] [UK-2 Limited] [206.217.216.28]
```

You can skip this step if you want, because later on we'll have to re-generate our `conf` file anyway. The ip we'll need later on is the WireGuard endpoint ip.

## Port Forwarding

Next we'll be getting a forwarded port. Go to `Services > My Services`.

<img id="torguardImages" src="/img/torguard_menu_item_services.png" alt="TorGuard Menu Item Services">

Then `Manage > Port Forward Request`.

<img id="torguardImages" src="/img/torguard_menu_item_port_forward.png" alt="TorGuard Menu Item Port Forward">

You'll see the below page, fill in the form as shown. You can pick your own port of choice. The ip is the same as shown above in our test `206.217.216.28`, usually also the same as our WireGuard endpoint.

<img id="torguardImages" src="/img/torguard_port_forward_request.png" alt="TorGuard Port Forward Request">

Hit `Submit Request`. You'll see the following output:

<img id="torguardImages" src="/img/torguard_port_request_status.png" alt="TorGuard Port Request Status">

## Re-Generate WireGuard Config

After having requested the port forward, we'll have to re-generate our config. Go to the [Config Generator](https://torguard.net/tgconf.php?action=vpn-openvpnconfig){: target=_blank rel="noopener" } and make sure it's set like below.

<img id="torguardImages" src="/img/torguard_config_generator_second.png" alt="TorGuard Config Generator Second">

Hit `Generate Config`. Start the VPN image with the updated `conf` file and do a port check on [YouGetSignal](https://www.yougetsignal.com/tools/open-ports){: target=_blank rel="noopener" }. You'll see that our port is open and ready to receive traffic.

<img id="torguardImages" src="/img/torguard_yougetsignal.png" alt="TorGuard YouGetSignal">
