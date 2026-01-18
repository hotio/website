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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1087" onclick="CopyToClipboard('tag1087');return false;" class="tag-decoration">release</div><div id="tag24780" onclick="CopyToClipboard('tag24780');return false;" class="tag-decoration">release-c35e632</div><div id="tag10126" onclick="CopyToClipboard('tag10126');return false;" class="tag-decoration">release-2.16.0</div><div id="tag24996" onclick="CopyToClipboard('tag24996');return false;" class="tag-decoration">release-v2</div><div id="tag23733" onclick="CopyToClipboard('tag23733');return false;" class="tag-decoration">release-v2.16</div><div id="tag10552" onclick="CopyToClipboard('tag10552');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/c35e632f49191ca1e8d3a2c75e3c76438d30269b" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21113702653" target="_blank">2026-01-18 14:57:38</a></td></tr>
<tr><td><div id="tag16906" onclick="CopyToClipboard('tag16906');return false;" class="tag-decoration">testing</div><div id="tag6352" onclick="CopyToClipboard('tag6352');return false;" class="tag-decoration">testing-82a1c65</div><div id="tag14277" onclick="CopyToClipboard('tag14277');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag10667" onclick="CopyToClipboard('tag10667');return false;" class="tag-decoration">testing-v2</div><div id="tag15916" onclick="CopyToClipboard('tag15916');return false;" class="tag-decoration">testing-v2.16</div><div id="tag28406" onclick="CopyToClipboard('tag28406');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/82a1c657099be57f12ea03a701e266e7d96b684e" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21113702763" target="_blank">2026-01-18 14:57:39</a></td></tr>
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
