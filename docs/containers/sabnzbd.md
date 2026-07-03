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
<tr><td><div id="tag21119" onclick="CopyToClipboard('tag21119');return false;" class="tag-decoration">nightly</div><div id="tag9299" onclick="CopyToClipboard('tag9299');return false;" class="tag-decoration">nightly-e63920d</div><div id="tag3562" onclick="CopyToClipboard('tag3562');return false;" class="tag-decoration">nightly-2e202eca23ab946c339e92d85e2deb3ffd173aec</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e63920dccca9072c2bfd54e7804ecdba770d32c9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28653057528" target="_blank">2026-07-03 09:56:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9962" onclick="CopyToClipboard('tag9962');return false;" class="tag-decoration">release</div><div id="tag17647" onclick="CopyToClipboard('tag17647');return false;" class="tag-decoration">release-50d7839</div><div id="tag31943" onclick="CopyToClipboard('tag31943');return false;" class="tag-decoration">release-5.0.4</div><div id="tag16484" onclick="CopyToClipboard('tag16484');return false;" class="tag-decoration">release-v5</div><div id="tag29809" onclick="CopyToClipboard('tag29809');return false;" class="tag-decoration">release-v5.0</div><div id="tag14304" onclick="CopyToClipboard('tag14304');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/50d7839af9465b59b7815af10fbb6fef7058bf7e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28591769145" target="_blank">2026-07-02 12:57:07</a></td></tr>
<tr><td><div id="tag8134" onclick="CopyToClipboard('tag8134');return false;" class="tag-decoration">testing</div><div id="tag23149" onclick="CopyToClipboard('tag23149');return false;" class="tag-decoration">testing-6a0cdc0</div><div id="tag17634" onclick="CopyToClipboard('tag17634');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6a0cdc0c448592096a49ea06d58609e7e6dbe1e4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28591768990" target="_blank">2026-07-02 12:57:08</a></td></tr>
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
