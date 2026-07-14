---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22138" onclick="CopyToClipboard('tag22138');return false;" class="tag-decoration">nightly</div><div id="tag14536" onclick="CopyToClipboard('tag14536');return false;" class="tag-decoration">nightly-9366cf0</div><div id="tag23922" onclick="CopyToClipboard('tag23922');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/9366cf05402bb103dc684bddbf6be6b60d815c40" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29320670861" target="_blank">2026-07-14 09:09:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26913" onclick="CopyToClipboard('tag26913');return false;" class="tag-decoration">release</div><div id="tag17869" onclick="CopyToClipboard('tag17869');return false;" class="tag-decoration">release-00509e3</div><div id="tag20371" onclick="CopyToClipboard('tag20371');return false;" class="tag-decoration">release-0.15.2</div><div id="tag10463" onclick="CopyToClipboard('tag10463');return false;" class="tag-decoration">release-v0</div><div id="tag7929" onclick="CopyToClipboard('tag7929');return false;" class="tag-decoration">release-v0.15</div><div id="tag9545" onclick="CopyToClipboard('tag9545');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/00509e32d38eff3adfb0ad07c1693aec32d5e8c1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329508110" target="_blank">2026-07-14 11:36:44</a></td></tr>
<tr><td><div id="tag19048" onclick="CopyToClipboard('tag19048');return false;" class="tag-decoration">testing</div><div id="tag25864" onclick="CopyToClipboard('tag25864');return false;" class="tag-decoration">testing-4937435</div><div id="tag17070" onclick="CopyToClipboard('tag17070');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag32232" onclick="CopyToClipboard('tag32232');return false;" class="tag-decoration">testing-v0</div><div id="tag8301" onclick="CopyToClipboard('tag8301');return false;" class="tag-decoration">testing-v0.15</div><div id="tag12589" onclick="CopyToClipboard('tag12589');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4937435847490c82f9337238c963e3f9bc781d96" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329513662" target="_blank">2026-07-14 11:36:49</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
