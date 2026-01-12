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
<tr><td><div id="tag3685" onclick="CopyToClipboard('tag3685');return false;" class="tag-decoration">nightly</div><div id="tag5856" onclick="CopyToClipboard('tag5856');return false;" class="tag-decoration">nightly-5594d4d6ebd107ab91333a57bf7d9b651000409c</div><div id="tag284" onclick="CopyToClipboard('tag284');return false;" class="tag-decoration">nightly-2e85135</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2e85135948db9821aea6fca59d9e1556ce3870fa" target="_blank">Version update: 605a1b30beb5d28c3bfda1167cd3106e26d13589 => 5594d4d6ebd107ab91333a57bf7d9b651000409c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20907686366" target="_blank">2026-01-12 04:03:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4573" onclick="CopyToClipboard('tag4573');return false;" class="tag-decoration">release</div><div id="tag25908" onclick="CopyToClipboard('tag25908');return false;" class="tag-decoration">release-4.5.5</div><div id="tag11639" onclick="CopyToClipboard('tag11639');return false;" class="tag-decoration">release-6c0f6de</div><div id="tag5375" onclick="CopyToClipboard('tag5375');return false;" class="tag-decoration">release-v4</div><div id="tag10710" onclick="CopyToClipboard('tag10710');return false;" class="tag-decoration">release-v4.5</div><div id="tag12741" onclick="CopyToClipboard('tag12741');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6c0f6de9ef0201001b08f3e741aa08c2e2c779ee" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20898165839" target="_blank">2026-01-11 16:17:45</a></td></tr>
<tr><td><div id="tag21963" onclick="CopyToClipboard('tag21963');return false;" class="tag-decoration">testing</div><div id="tag23599" onclick="CopyToClipboard('tag23599');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag24434" onclick="CopyToClipboard('tag24434');return false;" class="tag-decoration">testing-1fb9b04</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1fb9b04462443b96fab6df0407ac98e2a1acdafd" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20898166217" target="_blank">2026-01-11 16:17:46</a></td></tr>
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
