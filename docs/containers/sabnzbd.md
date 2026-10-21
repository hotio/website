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
<tr><td><div id="tag28026" onclick="CopyToClipboard('tag28026');return false;" class="tag-decoration">nightly</div><div id="tag29732" onclick="CopyToClipboard('tag29732');return false;" class="tag-decoration">nightly-fe8cf00</div><div id="tag7738" onclick="CopyToClipboard('tag7738');return false;" class="tag-decoration">nightly-9748bcf63f38035074d6cfad6a407812c3da59d7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/fe8cf00b438d46e71f06f20cdf89ad82f8185293" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39250100777" target="_blank">2026-10-19 12:11:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21418" onclick="CopyToClipboard('tag21418');return false;" class="tag-decoration">release</div><div id="tag31490" onclick="CopyToClipboard('tag31490');return false;" class="tag-decoration">release-2c745b7</div><div id="tag1379" onclick="CopyToClipboard('tag1379');return false;" class="tag-decoration">release-5.1.3</div><div id="tag29779" onclick="CopyToClipboard('tag29779');return false;" class="tag-decoration">release-v5</div><div id="tag9188" onclick="CopyToClipboard('tag9188');return false;" class="tag-decoration">release-v5.1</div><div id="tag14351" onclick="CopyToClipboard('tag14351');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2c745b700145179986cede2ecddb95df814a2d87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39478839170" target="_blank">2026-10-20 18:54:27</a></td></tr>
<tr><td><div id="tag21972" onclick="CopyToClipboard('tag21972');return false;" class="tag-decoration">testing</div><div id="tag25351" onclick="CopyToClipboard('tag25351');return false;" class="tag-decoration">testing-c6c599c</div><div id="tag20346" onclick="CopyToClipboard('tag20346');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c6c599c5f2cb1a29594a5947a29488156118eb29" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39652238071" target="_blank">2026-10-21 18:23:08</a></td></tr>
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
