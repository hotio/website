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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1863" onclick="CopyToClipboard('tag1863');return false;" class="tag-decoration">release</div><div id="tag7370" onclick="CopyToClipboard('tag7370');return false;" class="tag-decoration">release-74adedb</div><div id="tag27" onclick="CopyToClipboard('tag27');return false;" class="tag-decoration">release-2.16.1</div><div id="tag18641" onclick="CopyToClipboard('tag18641');return false;" class="tag-decoration">release-v2</div><div id="tag27115" onclick="CopyToClipboard('tag27115');return false;" class="tag-decoration">release-v2.16</div><div id="tag12353" onclick="CopyToClipboard('tag12353');return false;" class="tag-decoration">release-v2.16.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/74adedbfc04e7ae5356dba9cb62eebbb319485f8" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/22292141710" target="_blank">2026-02-23 03:44:36</a></td></tr>
<tr><td><div id="tag716" onclick="CopyToClipboard('tag716');return false;" class="tag-decoration">testing</div><div id="tag10255" onclick="CopyToClipboard('tag10255');return false;" class="tag-decoration">testing-b6b1f72</div><div id="tag17467" onclick="CopyToClipboard('tag17467');return false;" class="tag-decoration">testing-2.16.1</div><div id="tag9817" onclick="CopyToClipboard('tag9817');return false;" class="tag-decoration">testing-v2</div><div id="tag30994" onclick="CopyToClipboard('tag30994');return false;" class="tag-decoration">testing-v2.16</div><div id="tag27663" onclick="CopyToClipboard('tag27663');return false;" class="tag-decoration">testing-v2.16.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b6b1f72847a89e7290bc5974c89cdfeff242a4b8" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/22292142024" target="_blank">2026-02-23 03:44:37</a></td></tr>
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
