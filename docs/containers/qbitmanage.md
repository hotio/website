---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag12892" onclick="CopyToClipboard('tag12892');return false;" class="tag-decoration">nightly</div><div id="tag25995" onclick="CopyToClipboard('tag25995');return false;" class="tag-decoration">nightly-24c0537</div><div id="tag21380" onclick="CopyToClipboard('tag21380');return false;" class="tag-decoration">nightly-446bd7dc984b7884f00938f739688d344cb1b940</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/24c0537e7ab947a13bb3709b031a63896bd11f81" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25714959772" target="_blank">2026-05-12 05:16:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28726" onclick="CopyToClipboard('tag28726');return false;" class="tag-decoration">release</div><div id="tag21228" onclick="CopyToClipboard('tag21228');return false;" class="tag-decoration">release-ec30bf1</div><div id="tag11216" onclick="CopyToClipboard('tag11216');return false;" class="tag-decoration">release-4.7.0</div><div id="tag22051" onclick="CopyToClipboard('tag22051');return false;" class="tag-decoration">release-v4</div><div id="tag32426" onclick="CopyToClipboard('tag32426');return false;" class="tag-decoration">release-v4.7</div><div id="tag17025" onclick="CopyToClipboard('tag17025');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/ec30bf1f3fd6207b1dcaace327b5fe1724f98e66" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25708419773" target="_blank">2026-05-12 01:52:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
