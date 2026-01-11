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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14873" onclick="CopyToClipboard('tag14873');return false;" class="tag-decoration">release</div><div id="tag2889" onclick="CopyToClipboard('tag2889');return false;" class="tag-decoration">release-2.16.0</div><div id="tag2281" onclick="CopyToClipboard('tag2281');return false;" class="tag-decoration">release-29af03c</div><div id="tag6517" onclick="CopyToClipboard('tag6517');return false;" class="tag-decoration">release-v2</div><div id="tag5968" onclick="CopyToClipboard('tag5968');return false;" class="tag-decoration">release-v2.16</div><div id="tag6968" onclick="CopyToClipboard('tag6968');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/29af03c0ddcaf550555be4c513c5b07b821428f6" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20892091692" target="_blank">2026-01-11 08:20:06</a></td></tr>
<tr><td><div id="tag30118" onclick="CopyToClipboard('tag30118');return false;" class="tag-decoration">testing</div><div id="tag31356" onclick="CopyToClipboard('tag31356');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag24231" onclick="CopyToClipboard('tag24231');return false;" class="tag-decoration">testing-e968431</div><div id="tag32692" onclick="CopyToClipboard('tag32692');return false;" class="tag-decoration">testing-v2</div><div id="tag7074" onclick="CopyToClipboard('tag7074');return false;" class="tag-decoration">testing-v2.16</div><div id="tag8445" onclick="CopyToClipboard('tag8445');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/e968431b98d2132ba22c3db3c5625b3ecf3d6218" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20895148305" target="_blank">2026-01-11 12:29:28</a></td></tr>
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
        -e WEBUI_PORTS="8181/tcp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

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
          - WEBUI_PORTS=8181/tcp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
