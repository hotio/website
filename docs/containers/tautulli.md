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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5974" onclick="CopyToClipboard('tag5974');return false;" class="tag-decoration">release</div><div id="tag14005" onclick="CopyToClipboard('tag14005');return false;" class="tag-decoration">release-a35ee64</div><div id="tag23277" onclick="CopyToClipboard('tag23277');return false;" class="tag-decoration">release-2.17.1</div><div id="tag20183" onclick="CopyToClipboard('tag20183');return false;" class="tag-decoration">release-v2</div><div id="tag3632" onclick="CopyToClipboard('tag3632');return false;" class="tag-decoration">release-v2.17</div><div id="tag10605" onclick="CopyToClipboard('tag10605');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/a35ee6425fc44f5629d07346ee053ecb1b853267" target="_blank">Version update: 2.17.0 => 2.17.1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25358323170" target="_blank">2026-05-05 04:45:21</a></td></tr>
<tr><td><div id="tag3438" onclick="CopyToClipboard('tag3438');return false;" class="tag-decoration">testing</div><div id="tag7479" onclick="CopyToClipboard('tag7479');return false;" class="tag-decoration">testing-7632911</div><div id="tag12095" onclick="CopyToClipboard('tag12095');return false;" class="tag-decoration">testing-2.17.0</div><div id="tag24853" onclick="CopyToClipboard('tag24853');return false;" class="tag-decoration">testing-v2</div><div id="tag5677" onclick="CopyToClipboard('tag5677');return false;" class="tag-decoration">testing-v2.17</div><div id="tag22168" onclick="CopyToClipboard('tag22168');return false;" class="tag-decoration">testing-v2.17.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/7632911842fa7df12447f889c539af7fdea46078" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/24552149079" target="_blank">2026-04-17 06:54:39</a></td></tr>
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
