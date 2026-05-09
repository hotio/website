---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag6860" onclick="CopyToClipboard('tag6860');return false;" class="tag-decoration">nightly</div><div id="tag31246" onclick="CopyToClipboard('tag31246');return false;" class="tag-decoration">nightly-95eb0ff</div><div id="tag23175" onclick="CopyToClipboard('tag23175');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/95eb0ff92755f0afbbd0f798de95fb7d46b4d8f0" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25605067106" target="_blank">2026-05-09 15:44:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7286" onclick="CopyToClipboard('tag7286');return false;" class="tag-decoration">release</div><div id="tag32755" onclick="CopyToClipboard('tag32755');return false;" class="tag-decoration">release-ba891b8</div><div id="tag27552" onclick="CopyToClipboard('tag27552');return false;" class="tag-decoration">release-0.15.2</div><div id="tag2434" onclick="CopyToClipboard('tag2434');return false;" class="tag-decoration">release-v0</div><div id="tag25692" onclick="CopyToClipboard('tag25692');return false;" class="tag-decoration">release-v0.15</div><div id="tag28881" onclick="CopyToClipboard('tag28881');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ba891b8d3ed97e1b7788fe63982d3c3724e584c0" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552150036" target="_blank">2026-04-17 06:54:41</a></td></tr>
<tr><td><div id="tag29307" onclick="CopyToClipboard('tag29307');return false;" class="tag-decoration">testing</div><div id="tag17477" onclick="CopyToClipboard('tag17477');return false;" class="tag-decoration">testing-d4321cd</div><div id="tag25753" onclick="CopyToClipboard('tag25753');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag30956" onclick="CopyToClipboard('tag30956');return false;" class="tag-decoration">testing-v0</div><div id="tag11020" onclick="CopyToClipboard('tag11020');return false;" class="tag-decoration">testing-v0.15</div><div id="tag8713" onclick="CopyToClipboard('tag8713');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d4321cdc2fa0119a57bba734950bafbea79d5f9a" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25605067787" target="_blank">2026-05-09 15:44:26</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
