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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9320" onclick="CopyToClipboard('tag9320');return false;" class="tag-decoration">release</div><div id="tag3255" onclick="CopyToClipboard('tag3255');return false;" class="tag-decoration">release-69380ce</div><div id="tag1197" onclick="CopyToClipboard('tag1197');return false;" class="tag-decoration">release-2.16.0</div><div id="tag10179" onclick="CopyToClipboard('tag10179');return false;" class="tag-decoration">release-v2</div><div id="tag7362" onclick="CopyToClipboard('tag7362');return false;" class="tag-decoration">release-v2.16</div><div id="tag10223" onclick="CopyToClipboard('tag10223');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/69380ce71447cfd9e58c3e24dcf2d2789e92271e" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21428873846" target="_blank">2026-01-28 07:15:37</a></td></tr>
<tr><td><div id="tag8941" onclick="CopyToClipboard('tag8941');return false;" class="tag-decoration">testing</div><div id="tag18707" onclick="CopyToClipboard('tag18707');return false;" class="tag-decoration">testing-b9183fc</div><div id="tag29112" onclick="CopyToClipboard('tag29112');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag1233" onclick="CopyToClipboard('tag1233');return false;" class="tag-decoration">testing-v2</div><div id="tag30915" onclick="CopyToClipboard('tag30915');return false;" class="tag-decoration">testing-v2.16</div><div id="tag12537" onclick="CopyToClipboard('tag12537');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b9183fca21c4d5eaf3b9146ca9b8cb58e2ef38a9" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21428874273" target="_blank">2026-01-28 07:15:39</a></td></tr>
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
