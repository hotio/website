---
hide:
  - toc
title: hotio/doplarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/doplarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/doplarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/kiranshila/doplarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13610" onclick="CopyToClipboard('tag13610');return false;" class="tag-decoration">release</div><div id="tag24119" onclick="CopyToClipboard('tag24119');return false;" class="tag-decoration">release-14c8617</div><div id="tag16242" onclick="CopyToClipboard('tag16242');return false;" class="tag-decoration">release-3.7.0</div><div id="tag8171" onclick="CopyToClipboard('tag8171');return false;" class="tag-decoration">release-v3</div><div id="tag14260" onclick="CopyToClipboard('tag14260');return false;" class="tag-decoration">release-v3.7</div><div id="tag21076" onclick="CopyToClipboard('tag21076');return false;" class="tag-decoration">release-v3.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/doplarr/commit/14c861709af8a2f14d2f4d702385e271af4d7c82" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/doplarr/actions/runs/25708360560" target="_blank">2026-05-12 01:50:42</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="doplarr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/doplarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      doplarr:
        container_name: doplarr
        image: ghcr.io/hotio/doplarr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
