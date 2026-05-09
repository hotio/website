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
<tr><td><div id="tag23671" onclick="CopyToClipboard('tag23671');return false;" class="tag-decoration">nightly</div><div id="tag6157" onclick="CopyToClipboard('tag6157');return false;" class="tag-decoration">nightly-95eb0ff</div><div id="tag3883" onclick="CopyToClipboard('tag3883');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/95eb0ff92755f0afbbd0f798de95fb7d46b4d8f0" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25605067106" target="_blank">2026-05-09 15:44:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21270" onclick="CopyToClipboard('tag21270');return false;" class="tag-decoration">release</div><div id="tag23318" onclick="CopyToClipboard('tag23318');return false;" class="tag-decoration">release-30b971b</div><div id="tag166" onclick="CopyToClipboard('tag166');return false;" class="tag-decoration">release-0.15.2</div><div id="tag26654" onclick="CopyToClipboard('tag26654');return false;" class="tag-decoration">release-v0</div><div id="tag6556" onclick="CopyToClipboard('tag6556');return false;" class="tag-decoration">release-v0.15</div><div id="tag18314" onclick="CopyToClipboard('tag18314');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/30b971baf65c8213372944d967a2a3ffe6deec5b" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25605067560" target="_blank">2026-05-09 15:44:24</a></td></tr>
<tr><td><div id="tag218" onclick="CopyToClipboard('tag218');return false;" class="tag-decoration">testing</div><div id="tag31451" onclick="CopyToClipboard('tag31451');return false;" class="tag-decoration">testing-d4321cd</div><div id="tag12910" onclick="CopyToClipboard('tag12910');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag7020" onclick="CopyToClipboard('tag7020');return false;" class="tag-decoration">testing-v0</div><div id="tag8168" onclick="CopyToClipboard('tag8168');return false;" class="tag-decoration">testing-v0.15</div><div id="tag29124" onclick="CopyToClipboard('tag29124');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d4321cdc2fa0119a57bba734950bafbea79d5f9a" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25605067787" target="_blank">2026-05-09 15:44:26</a></td></tr>
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
