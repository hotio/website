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
<tr><td><div id="tag29448" onclick="CopyToClipboard('tag29448');return false;" class="tag-decoration">nightly</div><div id="tag28457" onclick="CopyToClipboard('tag28457');return false;" class="tag-decoration">nightly-437d155</div><div id="tag27384" onclick="CopyToClipboard('tag27384');return false;" class="tag-decoration">nightly-4c8e64668acc067ccf3e91f47540943c9346527a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/437d1554c40cc7e0f9ac2f1c043c0034e9864683" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42812996096" target="_blank">2026-11-10 12:06:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23174" onclick="CopyToClipboard('tag23174');return false;" class="tag-decoration">release</div><div id="tag5489" onclick="CopyToClipboard('tag5489');return false;" class="tag-decoration">release-40a6750</div><div id="tag13131" onclick="CopyToClipboard('tag13131');return false;" class="tag-decoration">release-5.1.3</div><div id="tag25243" onclick="CopyToClipboard('tag25243');return false;" class="tag-decoration">release-v5</div><div id="tag1573" onclick="CopyToClipboard('tag1573');return false;" class="tag-decoration">release-v5.1</div><div id="tag12464" onclick="CopyToClipboard('tag12464');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40a675030eb0baedfcf0f588b17c337610d281be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42325022471" target="_blank">2026-11-07 01:37:02</a></td></tr>
<tr><td><div id="tag28992" onclick="CopyToClipboard('tag28992');return false;" class="tag-decoration">testing</div><div id="tag31535" onclick="CopyToClipboard('tag31535');return false;" class="tag-decoration">testing-46faa76</div><div id="tag22828" onclick="CopyToClipboard('tag22828');return false;" class="tag-decoration">testing-5.2.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/46faa769ced91accd1b5f937af137a89afc87885" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42692723441" target="_blank">2026-11-09 20:24:51</a></td></tr>
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
