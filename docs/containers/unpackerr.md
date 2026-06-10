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
<tr><td><div id="tag14998" onclick="CopyToClipboard('tag14998');return false;" class="tag-decoration">nightly</div><div id="tag7024" onclick="CopyToClipboard('tag7024');return false;" class="tag-decoration">nightly-cfa8ac2</div><div id="tag23251" onclick="CopyToClipboard('tag23251');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/cfa8ac2d68485259e950488ae445d3b2a3b9d7c4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27276377239" target="_blank">2026-06-10 12:31:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27460" onclick="CopyToClipboard('tag27460');return false;" class="tag-decoration">release</div><div id="tag18703" onclick="CopyToClipboard('tag18703');return false;" class="tag-decoration">release-d448a27</div><div id="tag1437" onclick="CopyToClipboard('tag1437');return false;" class="tag-decoration">release-0.15.2</div><div id="tag28396" onclick="CopyToClipboard('tag28396');return false;" class="tag-decoration">release-v0</div><div id="tag32572" onclick="CopyToClipboard('tag32572');return false;" class="tag-decoration">release-v0.15</div><div id="tag1078" onclick="CopyToClipboard('tag1078');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d448a273055f08bf20b3e1d083fc42ca73ae2762" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27276375236" target="_blank">2026-06-10 12:31:06</a></td></tr>
<tr><td><div id="tag3150" onclick="CopyToClipboard('tag3150');return false;" class="tag-decoration">testing</div><div id="tag5341" onclick="CopyToClipboard('tag5341');return false;" class="tag-decoration">testing-320765b</div><div id="tag27354" onclick="CopyToClipboard('tag27354');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag5283" onclick="CopyToClipboard('tag5283');return false;" class="tag-decoration">testing-v0</div><div id="tag27408" onclick="CopyToClipboard('tag27408');return false;" class="tag-decoration">testing-v0.15</div><div id="tag8220" onclick="CopyToClipboard('tag8220');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/320765be042609e4ed28540575b4ee4840e2f8e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27276371080" target="_blank">2026-06-10 12:31:02</a></td></tr>
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
