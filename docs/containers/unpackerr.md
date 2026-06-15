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
<tr><td><div id="tag21946" onclick="CopyToClipboard('tag21946');return false;" class="tag-decoration">nightly</div><div id="tag10086" onclick="CopyToClipboard('tag10086');return false;" class="tag-decoration">nightly-04e05b5</div><div id="tag15482" onclick="CopyToClipboard('tag15482');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/04e05b50dd6edbe069b0838fc00caf2b14704931" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27525397631" target="_blank">2026-06-15 05:10:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17457" onclick="CopyToClipboard('tag17457');return false;" class="tag-decoration">release</div><div id="tag32293" onclick="CopyToClipboard('tag32293');return false;" class="tag-decoration">release-d448a27</div><div id="tag17621" onclick="CopyToClipboard('tag17621');return false;" class="tag-decoration">release-0.15.2</div><div id="tag25105" onclick="CopyToClipboard('tag25105');return false;" class="tag-decoration">release-v0</div><div id="tag18487" onclick="CopyToClipboard('tag18487');return false;" class="tag-decoration">release-v0.15</div><div id="tag2727" onclick="CopyToClipboard('tag2727');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d448a273055f08bf20b3e1d083fc42ca73ae2762" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27276375236" target="_blank">2026-06-10 12:31:06</a></td></tr>
<tr><td><div id="tag32720" onclick="CopyToClipboard('tag32720');return false;" class="tag-decoration">testing</div><div id="tag30588" onclick="CopyToClipboard('tag30588');return false;" class="tag-decoration">testing-320765b</div><div id="tag16132" onclick="CopyToClipboard('tag16132');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag14008" onclick="CopyToClipboard('tag14008');return false;" class="tag-decoration">testing-v0</div><div id="tag27744" onclick="CopyToClipboard('tag27744');return false;" class="tag-decoration">testing-v0.15</div><div id="tag19739" onclick="CopyToClipboard('tag19739');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/320765be042609e4ed28540575b4ee4840e2f8e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27276371080" target="_blank">2026-06-10 12:31:02</a></td></tr>
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
