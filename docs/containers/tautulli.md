---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9185" onclick="CopyToClipboard('tag9185');return false;" class="tag-decoration">release</div><div id="tag2750" onclick="CopyToClipboard('tag2750');return false;" class="tag-decoration">release-19eeda0</div><div id="tag3998" onclick="CopyToClipboard('tag3998');return false;" class="tag-decoration">release-2.16.0</div><div id="tag14378" onclick="CopyToClipboard('tag14378');return false;" class="tag-decoration">release-v2</div><div id="tag11921" onclick="CopyToClipboard('tag11921');return false;" class="tag-decoration">release-v2.16</div><div id="tag27535" onclick="CopyToClipboard('tag27535');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/19eeda005c3df043ea76a8eed061f0dd9cf4b4fd" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21060555716" target="_blank">2026-01-16 08:34:11</a></td></tr>
<tr><td><div id="tag10807" onclick="CopyToClipboard('tag10807');return false;" class="tag-decoration">testing</div><div id="tag10703" onclick="CopyToClipboard('tag10703');return false;" class="tag-decoration">testing-09ef3ae</div><div id="tag2024" onclick="CopyToClipboard('tag2024');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag11902" onclick="CopyToClipboard('tag11902');return false;" class="tag-decoration">testing-v2</div><div id="tag22869" onclick="CopyToClipboard('tag22869');return false;" class="tag-decoration">testing-v2.16</div><div id="tag8632" onclick="CopyToClipboard('tag8632');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/09ef3ae9ecf2560323fb14aa80f3679fdbbba8bc" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21063307228" target="_blank">2026-01-16 10:18:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
