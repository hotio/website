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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17296" onclick="CopyToClipboard('tag17296');return false;" class="tag-decoration">release</div><div id="tag180" onclick="CopyToClipboard('tag180');return false;" class="tag-decoration">release-d42c86a</div><div id="tag17379" onclick="CopyToClipboard('tag17379');return false;" class="tag-decoration">release-2.16.0</div><div id="tag10616" onclick="CopyToClipboard('tag10616');return false;" class="tag-decoration">release-v2</div><div id="tag17658" onclick="CopyToClipboard('tag17658');return false;" class="tag-decoration">release-v2.16</div><div id="tag23139" onclick="CopyToClipboard('tag23139');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/d42c86abb234efe17e53b39642b468f4c89b75f9" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21065745613" target="_blank">2026-01-16 11:53:07</a></td></tr>
<tr><td><div id="tag18884" onclick="CopyToClipboard('tag18884');return false;" class="tag-decoration">testing</div><div id="tag6344" onclick="CopyToClipboard('tag6344');return false;" class="tag-decoration">testing-98bfcfc</div><div id="tag32527" onclick="CopyToClipboard('tag32527');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag21652" onclick="CopyToClipboard('tag21652');return false;" class="tag-decoration">testing-v2</div><div id="tag6836" onclick="CopyToClipboard('tag6836');return false;" class="tag-decoration">testing-v2.16</div><div id="tag28748" onclick="CopyToClipboard('tag28748');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/98bfcfce8af13973a27dfc53dff9001a03871038" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21065745988" target="_blank">2026-01-16 11:53:08</a></td></tr>
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
