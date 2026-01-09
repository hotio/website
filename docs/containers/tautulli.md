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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28836" onclick="CopyToClipboard('tag28836');return false;" class="tag-decoration">release</div><div id="tag24132" onclick="CopyToClipboard('tag24132');return false;" class="tag-decoration">release-2.16.0</div><div id="tag24716" onclick="CopyToClipboard('tag24716');return false;" class="tag-decoration">release-1bd4d6d</div><div id="tag24736" onclick="CopyToClipboard('tag24736');return false;" class="tag-decoration">release-v2</div><div id="tag29159" onclick="CopyToClipboard('tag29159');return false;" class="tag-decoration">release-v2.16</div><div id="tag29521" onclick="CopyToClipboard('tag29521');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/1bd4d6d5033f2687ba9b85a180f9e1ce04b78310" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20770109965" target="_blank">2026-01-07 03:58:01</a></td></tr>
<tr><td><div id="tag18225" onclick="CopyToClipboard('tag18225');return false;" class="tag-decoration">testing</div><div id="tag16958" onclick="CopyToClipboard('tag16958');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag3142" onclick="CopyToClipboard('tag3142');return false;" class="tag-decoration">testing-f221c2a</div><div id="tag626" onclick="CopyToClipboard('tag626');return false;" class="tag-decoration">testing-v2</div><div id="tag5301" onclick="CopyToClipboard('tag5301');return false;" class="tag-decoration">testing-v2.16</div><div id="tag14448" onclick="CopyToClipboard('tag14448');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/f221c2a297fb177b38043875e5351ea0b0dbe50a" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20842481516" target="_blank">2026-01-09 05:41:16</a></td></tr>
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
