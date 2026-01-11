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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32373" onclick="CopyToClipboard('tag32373');return false;" class="tag-decoration">release</div><div id="tag27123" onclick="CopyToClipboard('tag27123');return false;" class="tag-decoration">release-2.16.0</div><div id="tag3359" onclick="CopyToClipboard('tag3359');return false;" class="tag-decoration">release-29af03c</div><div id="tag7512" onclick="CopyToClipboard('tag7512');return false;" class="tag-decoration">release-v2</div><div id="tag27145" onclick="CopyToClipboard('tag27145');return false;" class="tag-decoration">release-v2.16</div><div id="tag20996" onclick="CopyToClipboard('tag20996');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/29af03c0ddcaf550555be4c513c5b07b821428f6" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20892091692" target="_blank">2026-01-11 08:20:06</a></td></tr>
<tr><td><div id="tag9003" onclick="CopyToClipboard('tag9003');return false;" class="tag-decoration">testing</div><div id="tag30436" onclick="CopyToClipboard('tag30436');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag29818" onclick="CopyToClipboard('tag29818');return false;" class="tag-decoration">testing-ac68ef0</div><div id="tag15572" onclick="CopyToClipboard('tag15572');return false;" class="tag-decoration">testing-v2</div><div id="tag23764" onclick="CopyToClipboard('tag23764');return false;" class="tag-decoration">testing-v2.16</div><div id="tag31762" onclick="CopyToClipboard('tag31762');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/ac68ef06aa464073f1c956303fd863e7c3ff1cf2" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20850354280" target="_blank">2026-01-09 11:23:38</a></td></tr>
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
