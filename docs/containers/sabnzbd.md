---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19164" onclick="CopyToClipboard('tag19164');return false;" class="tag-decoration">nightly</div><div id="tag28727" onclick="CopyToClipboard('tag28727');return false;" class="tag-decoration">nightly-c7b494e</div><div id="tag25518" onclick="CopyToClipboard('tag25518');return false;" class="tag-decoration">nightly-d21a1119932896c1f7fea1b804e99c70f05dbd19</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/c7b494e7ebdd478146be1b276f575fb6ba28b642" target="_blank">Version update: 3e7dcce3657f92f09b5f1ea80a7c942d5d855b05 => d21a1119932896c1f7fea1b804e99c70f05dbd19</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20923044104" target="_blank">2026-01-12 14:31:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12663" onclick="CopyToClipboard('tag12663');return false;" class="tag-decoration">release</div><div id="tag16127" onclick="CopyToClipboard('tag16127');return false;" class="tag-decoration">release-6c0f6de</div><div id="tag29667" onclick="CopyToClipboard('tag29667');return false;" class="tag-decoration">release-4.5.5</div><div id="tag22024" onclick="CopyToClipboard('tag22024');return false;" class="tag-decoration">release-v4</div><div id="tag32402" onclick="CopyToClipboard('tag32402');return false;" class="tag-decoration">release-v4.5</div><div id="tag22904" onclick="CopyToClipboard('tag22904');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6c0f6de9ef0201001b08f3e741aa08c2e2c779ee" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20898165839" target="_blank">2026-01-11 16:17:45</a></td></tr>
<tr><td><div id="tag18424" onclick="CopyToClipboard('tag18424');return false;" class="tag-decoration">testing</div><div id="tag18345" onclick="CopyToClipboard('tag18345');return false;" class="tag-decoration">testing-1fb9b04</div><div id="tag20349" onclick="CopyToClipboard('tag20349');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1fb9b04462443b96fab6df0407ac98e2a1acdafd" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20898166217" target="_blank">2026-01-11 16:17:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
