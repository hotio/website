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
<tr><td><div id="tag23347" onclick="CopyToClipboard('tag23347');return false;" class="tag-decoration">nightly</div><div id="tag21036" onclick="CopyToClipboard('tag21036');return false;" class="tag-decoration">nightly-8daeea8</div><div id="tag28309" onclick="CopyToClipboard('tag28309');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8daeea8db414603a101ed18b2ed3e564bc6e0597" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707044000" target="_blank">2026-05-12 01:11:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19009" onclick="CopyToClipboard('tag19009');return false;" class="tag-decoration">release</div><div id="tag9434" onclick="CopyToClipboard('tag9434');return false;" class="tag-decoration">release-b710d58</div><div id="tag17040" onclick="CopyToClipboard('tag17040');return false;" class="tag-decoration">release-0.15.2</div><div id="tag29293" onclick="CopyToClipboard('tag29293');return false;" class="tag-decoration">release-v0</div><div id="tag12607" onclick="CopyToClipboard('tag12607');return false;" class="tag-decoration">release-v0.15</div><div id="tag2458" onclick="CopyToClipboard('tag2458');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b710d584351ffe6af0e9fb798d9233aba7d436e2" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25700674499" target="_blank">2026-05-11 22:19:37</a></td></tr>
<tr><td><div id="tag14495" onclick="CopyToClipboard('tag14495');return false;" class="tag-decoration">testing</div><div id="tag21848" onclick="CopyToClipboard('tag21848');return false;" class="tag-decoration">testing-2c6b8e7</div><div id="tag25272" onclick="CopyToClipboard('tag25272');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag14652" onclick="CopyToClipboard('tag14652');return false;" class="tag-decoration">testing-v0</div><div id="tag31167" onclick="CopyToClipboard('tag31167');return false;" class="tag-decoration">testing-v0.15</div><div id="tag2635" onclick="CopyToClipboard('tag2635');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2c6b8e79d4d459c85305c731cd28e1492d6ae9d7" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25707049171" target="_blank">2026-05-12 01:11:30</a></td></tr>
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
