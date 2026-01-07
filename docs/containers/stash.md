---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1615" onclick="CopyToClipboard('tag1615');return false;" class="tag-decoration">nightly</div><div id="tag8039" onclick="CopyToClipboard('tag8039');return false;" class="tag-decoration">nightly-9b709ef61457b9efb38cdb7f6f8401595855947a</div><div id="tag1518" onclick="CopyToClipboard('tag1518');return false;" class="tag-decoration">nightly-070c2c3</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/070c2c39b0fa8bf6585b9b7958ff45885ba29eb4" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20770109199" target="_blank">2026-01-07 03:57:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23719" onclick="CopyToClipboard('tag23719');return false;" class="tag-decoration">release</div><div id="tag22926" onclick="CopyToClipboard('tag22926');return false;" class="tag-decoration">release-0.30.1</div><div id="tag17876" onclick="CopyToClipboard('tag17876');return false;" class="tag-decoration">release-030e4a5</div><div id="tag19214" onclick="CopyToClipboard('tag19214');return false;" class="tag-decoration">release-v0</div><div id="tag16798" onclick="CopyToClipboard('tag16798');return false;" class="tag-decoration">release-v0.30</div><div id="tag29624" onclick="CopyToClipboard('tag29624');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/030e4a5e1ad89fa3aba5b01a2964e89faf4c9a11" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20770109537" target="_blank">2026-01-07 03:58:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
