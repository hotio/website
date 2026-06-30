---
hide:
  - toc
title: hotio/doplarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/doplarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/doplarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/activexray/doplarr_rs){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32643" onclick="CopyToClipboard('tag32643');return false;" class="tag-decoration">release</div><div id="tag1600" onclick="CopyToClipboard('tag1600');return false;" class="tag-decoration">release-864632a</div><div id="tag25039" onclick="CopyToClipboard('tag25039');return false;" class="tag-decoration">release-4.4.0</div><div id="tag26843" onclick="CopyToClipboard('tag26843');return false;" class="tag-decoration">release-v4</div><div id="tag16812" onclick="CopyToClipboard('tag16812');return false;" class="tag-decoration">release-v4.4</div><div id="tag23975" onclick="CopyToClipboard('tag23975');return false;" class="tag-decoration">release-v4.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/doplarr/commit/864632ac4088176657daec68b7c908b4181b28c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/doplarr/actions/runs/28446388455" target="_blank">2026-06-30 13:03:07</a></td></tr>
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
