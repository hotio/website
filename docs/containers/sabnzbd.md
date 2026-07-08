---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19567" onclick="CopyToClipboard('tag19567');return false;" class="tag-decoration">nightly</div><div id="tag9933" onclick="CopyToClipboard('tag9933');return false;" class="tag-decoration">nightly-d4720f9</div><div id="tag8893" onclick="CopyToClipboard('tag8893');return false;" class="tag-decoration">nightly-8afb8a91e29aaf8fc319c2f370e2b2611167a5f5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/d4720f9e019569d961d5c6f2d0e45bc88f7ad564" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28975719704" target="_blank">2026-07-08 21:06:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24043" onclick="CopyToClipboard('tag24043');return false;" class="tag-decoration">release</div><div id="tag5284" onclick="CopyToClipboard('tag5284');return false;" class="tag-decoration">release-50d7839</div><div id="tag16196" onclick="CopyToClipboard('tag16196');return false;" class="tag-decoration">release-5.0.4</div><div id="tag8538" onclick="CopyToClipboard('tag8538');return false;" class="tag-decoration">release-v5</div><div id="tag14988" onclick="CopyToClipboard('tag14988');return false;" class="tag-decoration">release-v5.0</div><div id="tag14191" onclick="CopyToClipboard('tag14191');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/50d7839af9465b59b7815af10fbb6fef7058bf7e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28591769145" target="_blank">2026-07-02 12:57:07</a></td></tr>
<tr><td><div id="tag2215" onclick="CopyToClipboard('tag2215');return false;" class="tag-decoration">testing</div><div id="tag2289" onclick="CopyToClipboard('tag2289');return false;" class="tag-decoration">testing-6a0cdc0</div><div id="tag6881" onclick="CopyToClipboard('tag6881');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6a0cdc0c448592096a49ea06d58609e7e6dbe1e4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28591768990" target="_blank">2026-07-02 12:57:08</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
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
